import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { TrainersComponent }    from './trainers.component';
import { TrainerFormComponent }  from './trainer-form/trainer-form.component';
import { TrainerComponent }  from './trainer/trainer.component';

import { TrainersRoutingModule } from './trainers-routing.module';

import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    FileUploadModule,
    TrainersRoutingModule
  ],
  declarations: [
    TrainersComponent,
    TrainerFormComponent,
    TrainerComponent
  ],
  providers: [ ]
})
export class TrainersModule {}