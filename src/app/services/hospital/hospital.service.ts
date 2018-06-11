import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Hospital } from '../../models/hospital.models';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {
  public totalHospitales : number = 0;
  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService,
    public _usuarioService: UsuarioService
  ) { }

  cargarHospitales() {
    const url = URL_SERVICIOS + '/hospital';
    return this.http.get(url)
    .map((resp: any) => {
      this.totalHospitales = resp.total;
      return resp.hospitales;
    });
  }

  obtenerHospital(id: string){
    const url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url).map((resp:any) =>  resp.hospital);
  }

  borrarHospital(id:string){
    const url = URL_SERVICIOS + '/hospital/' + id + '?token=' + this._usuarioService.token;
    return this.http.delete(url).map(resp => swal('Hospital Borrado','Eliminado correctamente','success'));
  }

  crearHospital(nombre: string){
    const url = URL_SERVICIOS + '/hospital?token=' + this._usuarioService.token;
    return this.http.post(url, {nombre})
    .map((resp: any) => resp.hospital);
  }

  buscarHospital(termino: string){
    const url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(url)
    .map((resp:any) => resp.hospitales);
  }

  actualizarHospital(hospital: Hospital) {
    const url = URL_SERVICIOS + '/hospital/' + hospital._id + '?token=' + this._usuarioService.token;
    return this.http.put(url,hospital)
    .map((resp: any) => {
      swal('Hospital Actualizado', hospital.nombre, 'success');
      return resp.hospital
    });
  }

}