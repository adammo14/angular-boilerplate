import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Config } from '../Config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public sideMenuIcon: boolean = Config.isNavbarOpenByDefault;
    @Output() sidenav: EventEmitter<any> = new EventEmitter();
    public isLoggedIn: boolean = Config.isLoggedIn;

    constructor() { }

    ngOnInit(): void {
    }

    toggleDrawer() {
        this.sidenav.emit();
        this.sideMenuIcon = !this.sideMenuIcon;
    }
}
