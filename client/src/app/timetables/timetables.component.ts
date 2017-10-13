import { Component, OnInit } from '@angular/core';
import { TimetableService } from './timetable.service';
import { Timetable } from "./timetable";

@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css'],
})

export class TimetablesComponent implements OnInit {

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