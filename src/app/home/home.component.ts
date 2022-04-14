import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Config } from '../shared/Config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'routing-boilerplate';
  public sidenav: MatSidenav;
  public isShowing: boolean = Config.isNavbarOpenByDefault;
  
  constructor() {

  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isShowing = !this.isShowing;
  }

}
