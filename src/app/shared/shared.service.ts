import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private drawer: MatDrawer;
    constructor() {
    }

    setDrawer(drawer: MatDrawer) {
        console.log('set drawer ran!');
        this.drawer = drawer;
    }

    toggle(): void {
        console.log(this.drawer);
        this.drawer.toggle();
    }
}
