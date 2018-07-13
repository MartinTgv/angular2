import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FUTBOL_ROUTING } from './martin.routing';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EquiposComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FUTBOL_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
