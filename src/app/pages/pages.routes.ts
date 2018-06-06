import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";

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
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(paegesRoutes);
