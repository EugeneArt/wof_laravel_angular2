import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainersComponent } from './trainers.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { TrainerComponent } from './trainer/trainer.component';

const trainersRoutes: Routes = [
  { path: '',  component: TrainersComponent },
  { path: 'new',  component: TrainerFormComponent },
  { path: ':id', component: TrainerFormComponent },
  { path: 'trainer/:id', component: TrainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(trainersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrainersRoutingModule { }