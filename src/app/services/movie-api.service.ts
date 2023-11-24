import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient: HttpClient) { }

  baseurl = 'https://api.themoviedb.org/3'
  apikey = '92c651d3d6360921a08d5e7fa9e209c2'


  bannerApiData(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }


  trendingData(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }


  getSearchMovie(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  getMovieDetails(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/movie/${id}?api_key=${this.apikey}`)
  }

  getMovieVideo(id:any):Observable<any>{
    return this.httpClient.get(`${this.baseurl}/movie/${id}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(id:any):Observable<any>{
    return this.httpClient.get(`${this.baseurl}/movie/${id}/credits?api_key=${this.apikey}`)
  }

  getActionMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }

  getAdventureMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }

  getAnimationMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }
  getComedyMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }
  getdocumentaryMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }
  getscienceFictionMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }
  getTrillerMovies():Observable<any>{
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }
}
