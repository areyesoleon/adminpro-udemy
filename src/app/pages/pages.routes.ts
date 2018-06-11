import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { HospitalesComponent } from "./hospitales/hospitales.component";

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
      //Mantenimientos
      { path: "usuarios", component: UsuarioComponent, data: {titulo:'Mantenimiento de usuarios'} },
      { path: "hospitales", component: HospitalesComponent, data: {titulo:'Mantenimiento de hospitales'} },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(paegesRoutes);
