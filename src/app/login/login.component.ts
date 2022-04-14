import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../shared/Config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    Config.isLoggedIn = true;
    this.router.navigate(['/home']);
  }
}
