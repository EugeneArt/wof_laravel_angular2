import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { Timetable } from '../timetables/timetable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})

export class FilterComponent implements OnInit {

  private timetables: Timetable[] = [];
  private params: any;

  constructor(
      private filterService: FilterService,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
        .subscribe(params => {
          this.params = params;
    });

    this.filterService.getTimetables(this.params).subscribe(data => {
      this.timetables = data;
    });
  }
}