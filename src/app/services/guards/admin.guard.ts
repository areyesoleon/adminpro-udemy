import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ){}
  canActivate() {
    if(this._usuarioService.usuario.role === 'ADMIN_ROLE'){
      return true;
    } else {
      console.log('bloqueado por el admin GUARD');
      this._usuarioService.logout();
      return false;
    }
  }
}
