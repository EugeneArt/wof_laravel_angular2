import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TimetablesComponent } from './timetables.component';
import { TimetablesMainComponent } from './timetables-main/timetables-main.component';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';
import { TimetableGymComponent } from './timetable-gym/timetable-gym.component';
import { TimetableMainGymComponent } from './timetable-main-gym/timetable-main-gym.component';
import { TimetableMainAllGymsComponent } from './timetable-main-all-gyms/timetable-main-all-gyms.component';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { TabComponent } from '../shared/tabs/tab/tab.component';

import { TimetableService } from './timetable.service';
import { KeysPipe } from '../shared/objectKey.pipe';
import { GroupByPipe } from '../shared/groupBy.pipe';

import { TimetablesRoutingModule } from './timetables-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    TimetablesRoutingModule
  ],
  declarations: [
    TimetablesComponent,
    TimetablesMainComponent,
    TimetableFormComponent,
    TimetableGymComponent,
    TimetableMainGymComponent,
    TimetableMainAllGymsComponent,
    TabsComponent,
    TabComponent,
    KeysPipe,
    GroupByPipe
  ],
  providers: [
    TimetableService
  ]
})
export class TimetablesModule {}