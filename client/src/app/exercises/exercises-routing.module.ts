import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent }    from './exercises.component';
import { ExerciseComponent }    from './exercise/exercise.component';
import { ExerciseFormComponent }  from './exercise-form/exercise-form.component';

const exercisesRoutes: Routes = [
  { path: '',  component: ExercisesComponent },
  { path: 'new', component: ExerciseFormComponent },
  { path: ':id', component: ExerciseFormComponent },
  { path: 'exercise/:id', component: ExerciseComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(exercisesRoutes)
  ],
  exports: [
    RouterModule
  ]
})  
export class ExercisesRoutingModule { }