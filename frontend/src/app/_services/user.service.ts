import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'http://localhost:4000';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${this.apiUrl}/users/${id}`);
    }
}
