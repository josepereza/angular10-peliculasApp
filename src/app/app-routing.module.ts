import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import {PeliculaComponent  } from "./components/pelicula/pelicula.component";

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'buscar', component:BuscarComponent},
  {path: 'pelicula/:id', component:PeliculaComponent },

  {path: 'buscar/:dato', component:BuscarComponent},
  
  {path: '**', redirectTo:"home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
