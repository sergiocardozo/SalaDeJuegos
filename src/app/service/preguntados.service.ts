import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  PUBLIC_KEY = '4ddb59387550a9d8c1cdda4075ba565e';
  HASH = '398b57fe3aef3bb4841f0bccfb9e6073';
  COMICS = '20%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9'
  
  apiUrl = `https://gateway.marvel.com:443/v1/public/characters?comics=${this.COMICS}&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  constructor(private http: HttpClient) { }

  getAllHeroes() {
    
    return this.http.get(this.apiUrl);
  }
}
