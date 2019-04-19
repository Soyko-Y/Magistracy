import { Component, OnInit } from '@angular/core';

import { AuthenticationService, DownloadsService } from '../../_services';
import { User, Role } from '../../_models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  currentUser: User;

  /**
   * Constructor
   */
  constructor(
    private downloadsService: DownloadsService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  /**
   * Angular OnInit
   */
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

  loadAdminsDownloads() {
    return this.downloadsService.getAdminsDownloads()
      .subscribe((data) => {
        this.downloadFile(data);
      });
  }

  loadUsersDownloads() {
    return this.downloadsService.getUsersDownloads()
      .subscribe((data) => {
        this.downloadFile(data);
      });
  }

  loadVisitersDownloads() {
    return this.downloadsService.getVisitersDownloads()
      .subscribe((data) => {
        this.downloadFile(data);
      });
  }

  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
