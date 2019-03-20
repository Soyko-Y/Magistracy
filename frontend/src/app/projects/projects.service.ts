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
}
