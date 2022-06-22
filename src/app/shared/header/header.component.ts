import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Config } from '../Config';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isLoggedIn: boolean;
    public isSideNavOpen: boolean = Config.isNavbarOpenByDefault;

    constructor(
        private auth: AuthService,
        private sharedService: SharedService
    ) {}

    ngOnInit(): void {
        this.auth.isLoggedIn$.subscribe((val) => {
            console.log('Login Status: ', val);
            this.isLoggedIn = val;
        });
    }

    toggleDrawer() {
        this.sharedService.toggleSideNav(true);
    }
}
