import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { NavigationMainComponent} from "../shared/navigation/navigation.component"

import { TimetablesModule } from '../timetables/timetables.module';
import { CommentsModule } from '../comments/comments.module';
import { FilterModule } from "../filter/filter.module";
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    RouterModule,
    HttpModule,
    TimetablesModule,
    CommentsModule,
    FilterModule
  ],
  declarations: [
    MainComponent,
    NavigationMainComponent
  ],
  providers: []
})
export class MainModule {}