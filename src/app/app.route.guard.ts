import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Config } from './shared/Config';

@Injectable({
    providedIn: 'root',
})
export class DefaultRootGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {}

    canActivate(): Observable<boolean> | boolean {
        return true;
        // return this.auth.checkIfLoggedIn().pipe(
        //     tap((r) => {
        //         if (r === true) {
        //             alert('yooo');
        //             this.router.navigate(['/']);
        //         } else {
        //             alert('tgesghdfh');
        //             this.router.navigate(['/login']);
        //         }
        //     })
        // );
    }
}
