import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import * as PostActions from '../actions/post.actions';

interface AppState {
  post: Post;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  post: Observable<Post>;
  text: string; // from input value

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText(): void {
    console.log('Sending', this.text);
    this.store.dispatch(new PostActions.EditText(this.text));
  }
  resetPost(): void {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote(): void {
    this.store.dispatch(new PostActions.Upvote());
  }
  downvote(): void {
    this.store.dispatch(new PostActions.Downvote());
  }
}
