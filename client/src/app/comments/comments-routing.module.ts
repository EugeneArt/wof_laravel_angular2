import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';

const commentsRoutes: Routes = [
  { path: '',  component: CommentsComponent },
  { path: 'new', component: CommentCreateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(commentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommentsRoutingModule {}