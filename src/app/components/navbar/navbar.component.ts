import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {PeliculasService} from '../../services/peliculas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  constructor(private router:Router, private ps:PeliculasService) { }

  ngOnInit(): void {
  }
buscarPelicula(texto:string){
  if(texto.length===0){
    return;
  }
console.log(texto)
this.ps.buscarPeliculas(texto);

this.router.navigate(['/buscar',texto]);
}
}
