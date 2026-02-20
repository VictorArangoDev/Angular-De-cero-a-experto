import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { RESTCountry } from '../interfaces/resp-country-interface';
import { Country } from '../interfaces/country-interface';
import { CountryMapper } from '../mappers/country-mapper';

const KEY_URL =  'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

 searchByCapital(query:string) : Observable<Country[]>{
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${KEY_URL}/capital/${query}`)
    .pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
       delay(2000),
      catchError( error =>{
        console.log('Error fetching ', error);
        return throwError(
          () => new Error(`No se pudo obtener países con ese query: ${query}`)
        )
      })
    )
 }


 searchByCountry(query: string) :Observable<Country[]>{
  query = query.toLocaleLowerCase();
  return this.http.get<RESTCountry[]>(`${KEY_URL}/name/${query}`)
  .pipe(
    map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
    // delay(3000),
    catchError( error  =>{
      console.log('Error fetching Data', error );
      return throwError(
        () => new Error(`No se pudo obtener la el pais con el query :  ${query}`)
      )
    })
  )


}
 searchByAlphaCode(code: string){
  return this.http.get<RESTCountry[]>(`${KEY_URL}/alpha/${code}`)
  .pipe(
    map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
    map((countries) => countries.at(0)),
    catchError( error  =>{
      console.log('Error fetching Data', error );
      return throwError(
        () => new Error(`No se pudo obtener la el pais con ese código :  ${code}`)
      )
    })
  )
 }


}
