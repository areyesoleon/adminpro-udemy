import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Rutas
import { APP_ROUTES } from "./app.routes";

//Modulos
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";

//temporal
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//servicos
import { ServiceModule } from './services/service.module';
import { PagesComponent } from "./pages/pages.component";
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent,PagesComponent],
  imports: [BrowserModule, APP_ROUTES, FormsModule,ServiceModule, ReactiveFormsModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
