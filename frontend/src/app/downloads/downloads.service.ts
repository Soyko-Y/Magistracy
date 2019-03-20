import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DownloadsService {

  /**
   * Constructor
   */
  constructor(private http: HttpClient) {
  }
}
