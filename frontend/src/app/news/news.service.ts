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
  //   getReport(type: string, from: Date, to: Date): Observable<Report> {
  //     return this.http.post(Constants.BASE_URL + '/report', {from: from.getTime(), to: to.getTime(), type: type})
  //       .map(res => res['payload']);
  //   }

  //   /**
  //    * Retrieves all reports as array
  //    */
  //   getReportsList() {
  //     return this.http.get(Constants.BASE_URL + '/report/list')
  //       .map((res: any) => {
  //         return res['payload'];
  //       });
  //   }

  //   /**
  //    * Retrieves data for chart as array
  //    */
  //   getChart(from: Date, to: Date, columnsList: Array<String>, type: string): Observable<any> {
  //     return this.http.post(Constants.BASE_URL + '/report/overview', {
  //       from: from.getTime(),
  //       to: to.getTime(),
  //       columnsList: columnsList,
  //       type: type
  //     })
  //       .map(res => res['payload']);
  //   }
}
