import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private drawer: MatDrawer;
    isSideNavOpen$ = new Subject<boolean>();

    constructor() {}

    toggleSideNav(val: boolean) {
        this.isSideNavOpen$.next(val);
    }

    setDrawer(drawer: MatDrawer) {
        console.log(drawer);
        this.drawer = drawer;
    }

    toggle(): void {
        console.log(this.drawer);
        this.drawer.toggle();
    }
}
