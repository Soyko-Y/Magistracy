import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Http, ResponseContentType } from '@angular/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class DownloadsService {
    private apiUrl = 'http://localhost:4000';
    isAlive = false;

    constructor(private http: HttpClient) { }

    getAdminsDownloads() {
        return this.http.get(`${this.apiUrl}/downloads/adminsDownloads`, { responseType: 'blob' });
    }

    getUsersDownloads() {
        return this.http.get(`${this.apiUrl}/downloads/usersDownloads`, { responseType: 'blob' });
    }

    getVisitersDownloads() {
        return this.http.get(`${this.apiUrl}/downloads/visitersDownloads`, { responseType: 'blob' });
    }
}
