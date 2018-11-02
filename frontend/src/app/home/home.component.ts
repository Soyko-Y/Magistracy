import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  /**
   * Whether or not the menu is opened
   */
  public menuOpened = false;

  /**
   * Report types
   */
  public reports = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['news']);
    }
  }

  /**
   * Toggles the menu
   */
  public toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }
}
