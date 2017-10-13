import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { LevelsComponent }    from './levels.component';
import { LevelFormComponent }  from './level-form/level-form.component';

import { LevelsRoutingModule } from './levels-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    LevelsRoutingModule
  ],
  declarations: [
    LevelsComponent,
    LevelFormComponent
  ],
  providers: [ ]
})
export class LevelsModule {}