import { Component, OnInit, Input } from '@angular/core';
import { Timetable } from '../timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable-gym',
  templateUrl: './timetable-gym.component.html',
  styleUrls: ['../timetables.component.css']
})

export class TimetableGymComponent implements OnInit {

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
    ]
  }

  ngOnInit() {

  }

  deleteTimetable(timetable) {
    if (confirm("Are you sure you want to delete " + timetable.id + "?")) {

      this.timetableService.deleteTimatable(timetable.id)
          .subscribe(null,
              err => {
                alert("Could not delete timetable.");
              });
    }
  }

}