import { Action } from '@ngrx/store';


export function messageReducer(state: string = 'Hello World', action: Action): string {
  console.log(action.type, state);

  switch (action.type) {
    case '[Message] SPANISH':
      return state = 'Hola Mundo';

    case '[Message] FRENCH':
      return state = 'Bonjour le monde';

    case '[Message] ENGLISH':
      return state = 'Hello World';

    default:
      return state;
  }
}
