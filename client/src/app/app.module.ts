import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GymService } from "./gyms/gym.service";
import { ExerciseService } from "./exercises/exercise.service";
import { LevelService } from "./levels/level.service";
import { TrainerService } from "./trainers/trainer.service"

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [GymService, ExerciseService, LevelService, TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
