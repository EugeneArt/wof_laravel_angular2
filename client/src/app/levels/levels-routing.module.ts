import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LevelsComponent }    from './levels.component';
import { LevelFormComponent }  from './level-form/level-form.component';

const levelsRoutes: Routes = [
  { path: '',  component: LevelsComponent },
  { path: 'new',  component: LevelFormComponent },
  { path: ':id', component: LevelFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(levelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})  
export class LevelsRoutingModule { }