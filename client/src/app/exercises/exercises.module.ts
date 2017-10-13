import { NgModule,Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ExercisesComponent }    from './exercises.component';
import { ExerciseFormComponent }  from './exercise-form/exercise-form.component';
import { ExerciseComponent }    from './exercise/exercise.component';

import { ImageService } from './image/image.service';

import { ExercisesRoutingModule } from './exercises-routing.module';
import {FileUploadModule} from "ng2-file-upload";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    FileUploadModule,
    ExercisesRoutingModule
  ],
  declarations: [
    ExercisesComponent,
    ExerciseComponent,
    ExerciseFormComponent
  ],
  providers: [
      ImageService
  ]
})
export class ExercisesModule {}