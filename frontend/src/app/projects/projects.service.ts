import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
// import {News} from './classes/news.class';

@Injectable()
export class ProjectsService {

  /**
   * Constructor
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves data for selected report
   */
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
