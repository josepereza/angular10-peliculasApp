import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
peliculas:any[]=[];
peliculas2:any[]=[]
  constructor(private ps:PeliculasService, private router:Router) { }

  ngOnInit(): void {
    this.ps.getPopulares().subscribe(data=>{
      console.log(data)
      
      this.peliculas2=data;

    })
    this.ps.getRecientes().subscribe(data=>{
      console.log(data)
      this.peliculas=data;
    })
  }
  
pelicula(id){
  this.router.navigate(['/pelicula',id]);
}
}
