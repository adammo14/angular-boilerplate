import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Config } from './shared/Config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'routing-boilerplate';
    public sidenav: MatSidenav;
    public isShowing: boolean = Config.isNavbarOpenByDefault;
    
    constructor() {}

    toggleSidebar() {
        this.isShowing = !this.isShowing;
    }
}
