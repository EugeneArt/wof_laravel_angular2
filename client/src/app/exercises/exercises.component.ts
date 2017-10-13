import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises: any = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(exercises => {
      this.exercises = exercises;
    });
  }

    deleteExercise(exercise) {
      if (confirm("Are you sure you want to delete " + exercise.exercise_name + "?")) {
        let index = this.exercises.indexOf(exercise);
        this.exercises.splice(index, 1);

        this.exerciseService.deleteExercise(exercise.id)
            .subscribe(null,
                err => {
                  alert("Could not delete exercise.");
                  // Revert the view back to its original state
                  this.exercises.splice(index, 0, exercise);
                });
      }
    }


}
