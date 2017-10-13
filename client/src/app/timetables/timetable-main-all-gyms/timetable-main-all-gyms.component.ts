import { Component, OnInit, Input } from '@angular/core';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable-main-all-gyms',
  templateUrl: './timetable-main-all-gyms.component.html',
  styleUrls: ['../timetables.component.css']
})

export class TimetableMainAllGymsComponent implements OnInit {

  @Input() timetables: any[];
  days: string[];

  constructor(private timetableService: TimetableService) {
    this.days = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ];
  }

  ngOnInit() {

  }
}