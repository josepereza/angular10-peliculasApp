import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute, ParamMap  } from "@angular/router";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
id:any;
pelicula:any;
  constructor(private ps:PeliculasService,public route:ActivatedRoute) {
    this.route.params.subscribe((parametro)=> {  
      console.log('mi gato ' , parametro)
      this.id=parametro
   })
  }
  ngOnInit(): void {
    this.ps.buscarPelicula(this.id).subscribe((dato)=>{
      this.pelicula=dato;
      console.log(dato)
     
    })
  }

}
