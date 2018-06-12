import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard, AdminGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { HospitalesComponent } from "./hospitales/hospitales.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { MedicoComponent } from "./medicos/medico.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";

const paegesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate:[LoginGuardGuard],
    children: [
      { path: "dashboard", component: DashboardComponent, data: {titulo:'Dashboard'} },
      { path: "progress", component: ProgessComponent, data: {titulo:'Progress Bar'} },
      { path: "graficas1", component: Graficas1Component, data: {titulo:'Grafica'} },
      { path: "promesas", component: PromesasComponent, data: {titulo:'Promesa'} },
      { path: "rxjs", component: RxjsComponent, data: {titulo:'RXJS'} },
      { path: "account-settings", component: AccountSettingsComponent, data: {titulo:'Settings'} },
      { path: "perfil", component: ProfileComponent, data: {titulo:'Perfil del usuario'} },
      { path: "busqueda/:termino", component: BusquedaComponent, data: {titulo:'Buscador'} },
      //Mantenimientos
      { 
        path: "usuarios", component: UsuarioComponent, 
        canActivate:[AdminGuard],
        data: {titulo:'Mantenimiento de usuarios'} 
      },
      { path: "hospitales", component: HospitalesComponent, data: {titulo:'Mantenimiento de hospitales'} },
      { path: "medicos", component: MedicosComponent, data: {titulo:'Mantenimiento de medicos'} },
      { path: "medico/:id", component: MedicoComponent, data: {titulo:'Actualizar medico'} },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(paegesRoutes);
