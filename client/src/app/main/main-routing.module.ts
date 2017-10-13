import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { TimetablesMainComponent } from '../timetables/timetables-main/timetables-main.component';
import { CommentCreateComponent } from '../comments/comment-create/comment-create.component';

const mainRoutes: Routes = [
      { path: '',
        component: MainComponent,
        children: [
          { path: '', component: TimetablesMainComponent },
          { path: 'comment', component: CommentCreateComponent },
          { path: 'filter', loadChildren: '../filter/filter.module#FilterModule' },
        ],
      },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}