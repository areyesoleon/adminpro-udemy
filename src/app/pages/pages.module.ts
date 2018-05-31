import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { ProgessComponent } from "./progess/progess.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";

//ng2-charts
import { ChartsModule } from 'ng2-charts';


//temporal
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports: [
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [SharedModule, PAGES_ROUTES, FormsModule,ChartsModule]
})
export class PagesModule {}
