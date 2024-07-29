import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '1c38e83b'

  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string = '', year: string = '', page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?apikey=${this.apiKey}&s=${title}&type=${type}&y=${year}&page=${page}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?apikey=${this.apiKey}&i=${id}&plot=full`);
  }
}



