import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Config } from '../shared/Config';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'app-home',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public sidenav: MatSidenav;
    public isOpen: boolean = true;
    @ViewChild('drawer') public drawer: MatDrawer;

    constructor(
        private auth: AuthService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.sharedService.isSideNavOpen$.subscribe((val) => {
            console.log('Sidenav Status: ', val);
            this.isOpen = val;
        });
    }

    // toggleSidebar() {
    //     this.isShowing = !this.isShowing;
    // }

    logOut() {
        this.auth.logIn(false);
    }
}
