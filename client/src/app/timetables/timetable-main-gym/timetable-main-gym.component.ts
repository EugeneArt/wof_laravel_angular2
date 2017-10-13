import { Component, OnInit, Input } from '@angular/core';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable-main-gym',
  templateUrl: './timetable-main-gym.component.html',
  styleUrls: ['../timetables.component.css']
})

export class TimetableMainGymComponent implements OnInit {

  @Input() timetable: Timetable;
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