import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// import {News} from './classes/news.class';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NewsService {

  api_key = 'c496d73da3574f508c2523648249849c';
  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves news from API
   */
  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
