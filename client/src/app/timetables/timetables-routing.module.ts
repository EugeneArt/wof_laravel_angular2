import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimetablesComponent } from './timetables.component';

import { TimetableFormComponent } from './timetable-form/timetable-form.component';

const timetablesRoutes: Routes = [
  { path: '',  component: TimetablesComponent },
  { path: 'new', component: TimetableFormComponent },
  { path: ':id', component: TimetableFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(timetablesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TimetablesRoutingModule { }