import { Component, OnInit } from '@angular/core';

import { UserService, AuthenticationService } from '../../_services';
import { User, Role } from '../../_models';
import { DownloadsService } from '../downloads.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  currentUser: User;
  userFromApi: User;
  downloads;

  /**
   * Constructor
   */
  constructor(
    // private downloadsService: DownloadsService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  /**
   * Angular OnInit
   */
  ngOnInit() {
    this.downloads = this.loadDownloads();
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

  // loadDownloads() {
  //   if (this.isLogged() === 'admin') {
  //     this.downloadsService.getAdminsDownloads().pipe(first()).subscribe(downloads => {
  //       return downloads;
  //     });
  //   } else if (this.isLogged() === 'user') {
  //     this.downloadsService.getUsersDownloads().pipe(first()).subscribe(downloads => {
  //       return downloads;
  //     });
  //   } else {
  //     this.downloadsService.getVisitersDownloads().pipe(first()).subscribe(downloads => {
  //       return downloads;
  //     });
  //   }
  // }

  loadDownloads() {
    if (this.isLogged() === 'admin') {
      return [
        'https://www.google.com/',
        'https://yandex.by/',
        'https://www.youtube.com/',
      ];
    } else if (this.isLogged() === 'user') {
      return [
        'https://www.google.com/',
        'https://yandex.by/',
      ];
    } else {
      return [
        'https://www.google.com/',
      ];
    }
  }

}
