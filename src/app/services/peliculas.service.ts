import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private urlMovieDB: string = 'https://api.themoviedb.org/3';
  private apikey: string = 'b2b2b544b98945b0423554da4ff5209b';
  constructor(private http: HttpClient) { }
  sub = new Subject();

  peliculas:any[]=[];
  getPopulares(){
    
    let desde = new Date();
    let hasta = new Date();
    desde.setDate( desde.getDate() - 7 );
    hasta.setDate( hasta.getDate() + 7 );
    // toISOSString() me devuelve el formato yyyy-mm-dd necesario, Date() solo me devuelve 1 solo dígito en casos del 1 al 9
    let desdeString = desde.toISOString().substring(0,10);
    let hastaString = hasta.toISOString().substring(0,10);
    
   
    const params = new HttpParams()
    .set('language', 'es')
    .set('include_image_language', 'es')
    .set('api_key', this.apikey)
    
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc`;
    return this.http.get(url,{params}).pipe(
      map(
        (resp:any) =>{
          return resp.results;
        }
      )
    )
      }
      getRecientes(){
    
        let desde = new Date();
        let hasta = new Date();
        
        desde.setDate( hasta.getDate() );
        hasta.setDate( desde.getDate() + 7);
    
        let desdeStr = `${ desde.getFullYear() }-0${ desde.getMonth() + 1 }-${ desde.getDate() }`;
        let hastaStr = `${ hasta.getFullYear() }-0${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;
        
        console.log( 'Desde:', desdeStr );
        console.log( 'Hasta:', hastaStr );
        
        
    
        let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&include_image_language=es`;
        return this.http.get(url).pipe(
          map(
            resp =>{
              return resp['results']
            }
          )
        )
      }

      buscarPeliculas(peli: string) {
        const url = `${this.urlMovieDB}/search/movie`;
    
        const params = new HttpParams()
                .set('query', peli)
                .set('language', 'es')
                .set('api_key', this.apikey);
    
         this.http.get<any>(url, {params})
                .pipe(
                  map( (data) => data.results )
                ).subscribe(data=>{
                  this.peliculas=data;
                  this.sub.next(this.peliculas)
                })

    }
    buscarPelicula(parametro) {
      const url = `https://api.themoviedb.org/3/movie/${parametro.id}?api_key=b2b2b544b98945b0423554da4ff5209b&language=es`;
  
      const params = new HttpParams()
              .set('language', 'es')
              .set('api_key', this.apikey);
  
       return this.http.get<any>(url)
              

  }
  }
