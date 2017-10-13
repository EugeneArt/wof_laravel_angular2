import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GymsComponent }    from './gyms.component';
import { GymFormComponent }  from './gym-form/gym-form.component';

const gymsRoutes: Routes = [
  { path: '', component: GymsComponent, pathMatch: 'full' },
  { path: 'new',  component: GymFormComponent },
  { path: ':id', component: GymFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gymsRoutes)
  ],
  exports: [
    RouterModule
  ]
})  
export class GymsRoutingModule { }