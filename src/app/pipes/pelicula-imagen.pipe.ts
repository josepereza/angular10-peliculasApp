import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {
urlImagen="https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  transform(pelicula:any): any {
    if (pelicula.backdrop_path){
    return  this.urlImagen+pelicula.backdrop_path;
    }else
    if (pelicula.poster_path){
      return this.urlImagen+pelicula.poster_path
    }else
    return "assets/img/no-imagen.png"
  }

}
