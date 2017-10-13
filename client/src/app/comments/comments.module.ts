import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommentsComponent }    from './comments.component';
import { CommentCreateComponent }  from './comment-create/comment-create.component';

import { CommentService } from './comment.service';

import { CommentsRoutingModule } from './comments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommentsRoutingModule
  ],
  declarations: [
    CommentsComponent,
    CommentCreateComponent
  ],
  providers: [ CommentService ]
})
export class CommentsModule {}