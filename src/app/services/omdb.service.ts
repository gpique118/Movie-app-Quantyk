import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '1c38e83b'; 

  constructor(private http: HttpClient) { }

  getMovies(search: string, page: number, filters: any): Observable<any> {
    let params: any = {
      s: search,
      page: page.toString(),
      apikey: this.apiKey,
      type: filters.type || '',
      y: filters.year || '',
      genre: filters.genre || ''
    };
    console.log('Fetching movies with params:', params);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getMovieDetail(id: string): Observable<any> {
    console.log('Fetching movie detail with ID:', id);
    return this.http.get<any>(this.apiUrl, { params: { i: id, apikey: this.apiKey } });
  }
}


