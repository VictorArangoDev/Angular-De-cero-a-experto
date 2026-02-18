import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const KEY_URL =  'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

 search(query:string): Observable<any>{
    query = query.toLocaleLowerCase();
    const data = this.http.get(`${KEY_URL}/capital/${query}`);

    return data;
 }

}
