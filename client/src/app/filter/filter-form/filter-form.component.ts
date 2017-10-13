import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Filter } from '../filter';
import { GymService } from '../../gyms/gym.service';
import { ExerciseService } from '../../exercises/exercise.service';
import { LevelService } from '../../levels/level.service';
import { TrainerService } from '../../trainers/trainer.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['../filter.component.css']
})

export class FilterFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  filter: Filter = new Filter;
  days: string[];
  gyms: any[];
  exercises: any[];
  levels: any[];
  trainers: any[];

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private gymService: GymService,
      private exerciseService: ExerciseService,
      private levelService: LevelService,
      private trainerService: TrainerService
  ) {
    this.form = formBuilder.group({
      day: ['', [
      ]],
      hour: ['', [
      ]],
      gym_id: ['', [
      ]],
      exercise_id: ['', [
      ]],
      level_id: ['', [
      ]],
      trainer_id: ['', [
      ]]
    });

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
    this.gymService.getGyms().subscribe(data => {
      this.gyms = data;
    });

    this.exerciseService.getExercises().subscribe(data => {
      this.exercises = data;
    });

    this.levelService.getLevels().subscribe(data => {
      this.levels = data;
    });

    this.trainerService.getTrainers().subscribe(data => {
      this.trainers = data;
    });
  }

  save() {
    const result = this.form.value;
    this.router.navigate(['filter/query'], { queryParams: result });
  }
}
