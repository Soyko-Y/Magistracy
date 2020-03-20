import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services';
import { User, Role } from '../_models';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})

export class DownloadsComponent implements OnInit {
  currentUser: User;
  private apiUrl = 'http://ostimeline.org:4000/downloads/';

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  isLogged() {
    switch (this.currentUser && this.currentUser.role) {
      case Role.Admin:
        return 'admin';
      case Role.User:
        return 'user';
      default:
        return false;
    }
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  get isUser() {
    return this.currentUser && (this.currentUser.role === Role.Admin || this.currentUser.role === Role.User);
  }

  downloadDemo() {
    window.open(this.apiUrl + 'demo');
  }


  downloadOstimeline() {
    window.open(this.apiUrl + 'ostimeline');
  }

  downloadLovelyGrayButtons() {
    window.open(this.apiUrl + 'lovelygraybuttons');
  }
}
