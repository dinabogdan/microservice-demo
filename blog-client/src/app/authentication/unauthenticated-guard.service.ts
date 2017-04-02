import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {CanActivate} from '@angular/router';
import {AppState} from './app-state';

@Injectable()
export class UnauthenticatedGuardService implements CanActivate {
  unauthenticated: boolean = false;

  constructor(private _store: Store<AppState>) {
    this._store
      .select(state => state.auth)
      .subscribe(authentication => this.unauthenticated = authentication.claims == null);
  }

  canActivate(): boolean {
    return this.unauthenticated;
  }
}