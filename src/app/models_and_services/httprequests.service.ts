import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { Source } from './source';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttprequestsService {

  constructor(private http: HttpClient) { }

  BASE_URL1 = "https://newsapi.org/v2/top-headlines"
  PROXY_URL = "https://cors-anywhere.herokuapp.com/"
  BASE_URL = this.PROXY_URL +this.BASE_URL1
  API_KEY =  environment.API
 
  getSources(category:string):Observable<Source[]>{
    return this.http.get<Source[]>(this.BASE_URL+"/sources?language=en&category="+category+"&apiKey="+this.API_KEY);
  }

  getArticles(source:string):Observable<Article[]>{
    return this.http.get<Article[]>(this.BASE_URL+"?sources="+source+"&apiKey="+this.API_KEY);

  }
}
