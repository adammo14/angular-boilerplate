import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Config } from './shared/Config';

@Injectable({
    providedIn: 'root'
})

export class DefaultRootGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(): boolean {
        let redirectUrl = '';

        if(!Config.isLoggedIn) {
            redirectUrl = 'login';
        }

        if(redirectUrl) {
            this.router.navigate([redirectUrl]);
            return false;
        }

        return true;
    }
}
