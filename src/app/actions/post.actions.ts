import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';


export interface PostAction extends Action {
  type: string;
  payload?: any;
}

export class EditText implements PostAction {
  type: string = EDIT_TEXT;
  constructor(public payload: any) { }
}

export class Upvote implements PostAction {
  type: string = UPVOTE;
}

export class Downvote implements PostAction {
  type: string = DOWNVOTE;
}

export class Reset implements PostAction {
  type: string = RESET;
}
