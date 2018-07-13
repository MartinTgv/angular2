import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { equal } from 'assert';
import { EquiposComponent } from './equipos/equipos.component';

const FUTBOL: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(FUTBOL)],
  exports: [RouterModule]
})
export class FUTBOL_ROUTING { }