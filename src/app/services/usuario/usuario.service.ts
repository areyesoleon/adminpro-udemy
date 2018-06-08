import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;
  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) { 
    this.cargarStorage();
  }

  crearUsuario(usuario: Usuario){
    const url = URL_SERVICIOS+'/usuario';
    return this.http.post(url,usuario)
    .map((resp: any) =>{
      swal('Usuario Creado',usuario.email,'success')
      return resp.usuario;
    });
  }

  login(usuario: Usuario, recordar:boolean = false){
    if(recordar){
      localStorage.setItem('email',usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS +'/login';
    return this.http.post(url,usuario).map((resp: any) => {
      localStorage.setItem('id',resp.id)
      localStorage.setItem('token',resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.usuario = resp.usuario
      this.token = resp.token;
      return true;
    });
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  cargarStorage() {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id:string, token:string, usuario:Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  actualizarUsuario(usuario: Usuario){
    const url = URL_SERVICIOS + '/usuario/' + usuario._id + '?token=' + this.token;
    return this.http.put(url,usuario).map((resp: any) => {
      const usuario: Usuario = resp.usuario;
      this.guardarStorage(usuario._id,this.token, usuario);
      swal('Usuario actualizado', usuario.nombre,'success');
      return true;
    });
  }

  cambiarImagen(archivo:File, id:string) {
    this._subirArchivoService.subirArchivo(archivo,'usuarios',id)
    .then((resp:any) => {
      this.usuario.img = resp.usuarioActualizado.img;
      swal('Imagen actualizada',this.usuario.nombre,'success');
      this.guardarStorage(id,this.token,this.usuario);
    })
    .catch((resp) => {
      console.log(resp);
    });
  }

  cargarUsuario(desde:number = 0){
    const url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get(url);
  }

  buscarUsuarios(termino:string){
    const url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get(url)
    .map((resp:any) => resp.usuarios);
  }
}
