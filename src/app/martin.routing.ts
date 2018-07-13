import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';

const FUTBOL: Routes = [
  { path: 'RealMadrid', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(FUTBOL)],
  exports: [RouterModule]
})
export class FUTBOL_ROUTING { }