import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { ExerciseService } from '../exercise.service';
import { Exercise } from "../exercise";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['../exercises.component.css']
})
export class ExerciseComponent implements OnInit {

  exercise: Exercise = new Exercise;
  currentId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private exerciseService: ExerciseService) { }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      if(!this.currentId) {
        return;
      }

      this.exerciseService.getExercise(this.currentId).subscribe( exercise => this.exercise = exercise,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

}
