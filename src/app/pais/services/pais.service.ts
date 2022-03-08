import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = environment.api;

  get httpParams () {
    return 'fields=name,capital,alpha2Code,flag,population'
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }?${this.httpParams}`;
    
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }?${this.httpParams}`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }?${this.httpParams}`;

    return this.http.get<Country[]>( url )
            .pipe(
              tap( console.log )
            )
  }

}
