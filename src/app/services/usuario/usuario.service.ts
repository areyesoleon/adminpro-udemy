import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;
  constructor(
    public http: HttpClient,
    public router: Router
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
  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }
}
