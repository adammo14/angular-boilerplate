import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isDashboard: boolean;

    constructor(private router: Router) {}

    ngOnInit(): void {
        console.log(this.router.url);
        if (this.router.url === 'dashboard') {
            console.log(this.router.url);
            this.isDashboard = true;
        }
    }
}
