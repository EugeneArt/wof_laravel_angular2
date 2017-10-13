import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { Timetable } from '../timetable';

@Component({
  selector: 'app-timetables-main',
  templateUrl: './timetables-main.component.html',
  styleUrls: ['../timetables.component.css'],
})

export class TimetablesMainComponent implements OnInit {

  private timetables: Timetable[] = [];

  constructor(private timetableService: TimetableService) {
  }

  ngOnInit() {
    this.timetableService.getTimetables().subscribe(data => {
      const keys = [];
      for (let key in data) {
        keys.push({key: key, value: data[key]});
      }
      this.timetables = keys;

    });
  }
}