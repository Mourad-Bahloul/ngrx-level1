import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {


  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage(): void {
    this.store.dispatch({ type: '[Message] SPANISH' });
  }

  frenchMessage(): void {
    this.store.dispatch({ type: '[Message] FRENCH' });
  }

  defaultMessage(): void {
    this.store.dispatch({ type: '[Message] ENGLISH' });
  }


}
