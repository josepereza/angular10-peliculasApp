import { Component, OnInit} from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute, ParamMap  } from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
busqueda:string;
peliculas:any[]=[]
  constructor(public route:ActivatedRoute, public ps:PeliculasService) {
    console.log('constructor')
    this.route.params.subscribe(parametros=> {  
     console.log('mi perro ' , parametros.dato)
     this.busqueda=parametros.dato;
    });  
   }
   
  ngOnInit(): void {
    this.ps.buscarPeliculas(this.busqueda);
    this.ps.sub.subscribe((data:any)=>{
      this.peliculas=data
    })
    }
  

}
