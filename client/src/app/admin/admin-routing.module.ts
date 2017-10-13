import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [

  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'banners', loadChildren: '../banners/banners.module#BannersModule'},
      { path: 'comments', loadChildren: '../comments/comments.module#CommentsModule' },
      { path: 'exercises', loadChildren: '../exercises/exercises.module#ExercisesModule' },
      { path: 'gyms', loadChildren: '../gyms/gyms.module#GymsModule' },
      { path: 'levels', loadChildren: '../levels/levels.module#LevelsModule'},
      { path: 'trainers', loadChildren: '../trainers/trainers.module#TrainersModule' },
      { path: 'timetables', loadChildren: '../timetables/timetables.module#TimetablesModule' },
      { path: '', redirectTo: 'timetables', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }