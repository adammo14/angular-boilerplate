import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Config } from './shared/Config';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn$ = new Subject<boolean>();

    logIn(val: boolean) {
        this.isLoggedIn$.next(val);
    }

    // checkIfLoggedIn(): boolean {
    //     return Config.isLoggedIn;
    // }

    checkIfLoggedIn(): Observable<boolean> {
        return this.isLoggedIn$;
    }
}
