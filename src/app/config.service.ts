import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
url=  'https://jsonp.afeld.me/?url=https%3A%2F%2Fapi.myglamapp.pl%2Fapi%2Fcategories%3Flanguage%3DEN'

constructor (private http: HttpClient) { }




  getapi() {
   
    return this.http.get(this.url)
 
    
  }


  
}
