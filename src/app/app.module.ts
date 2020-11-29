import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './reducers/message.reducer';
import { postReducer } from './reducers/post.reducer';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      message: messageReducer,
      post: postReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
