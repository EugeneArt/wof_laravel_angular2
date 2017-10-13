import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { GymsComponent }    from './gyms.component';
import { GymFormComponent } from "./gym-form/gym-form.component";

import { GymsRoutingModule } from './gyms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    GymsRoutingModule
  ],
  declarations: [
    GymsComponent,
    GymFormComponent
  ],
  providers: [ ]
})
export class GymsModule {}