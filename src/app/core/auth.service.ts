import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user.model';
import {State} from './model/state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  location = inject(Location);
  notConnected = "NOT_CONNECTED"

  private fetchUser$:WritableSignal<State<User>>
    = signal(State.Builder<User>().forSuccess({email:this.notConnected}));
}
