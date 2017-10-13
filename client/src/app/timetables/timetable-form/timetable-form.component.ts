import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Timetable } from "../timetable";
import { TimetableService } from '../timetable.service';
import { GymService } from '../../gyms/gym.service';
import { ExerciseService } from '../../exercises/exercise.service';
import { LevelService } from '../../levels/level.service';
import { TrainerService } from '../../trainers/trainer.service';

@Component({
  selector: 'app-timetable-form',
  templateUrl: './timetable-form.component.html',
  styleUrls: ['../timetables.component.css']
})

export class TimetableFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  timetable: Timetable = new Timetable;
  currentId: number;
  days: string[];
  gyms: any[];
  exercises: any[];
  levels: any[];
  trainers: any[];

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private timetableService: TimetableService,
      private gymService: GymService,
      private exerciseService: ExerciseService,
      private levelService: LevelService,
      private trainerService: TrainerService
  ) {
    this.form = formBuilder.group({
      day: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      hour: ['', [
        Validators.required,
        Validators.maxLength(5)
      ]],
      gym_id: ['', [
        Validators.required,
      ]],
      exercise_id: ['', [
        Validators.required,
      ]],
      level_id: ['', [
        Validators.required,
      ]],
      trainers_id: ['', [
        Validators.required,
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
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit timetable' : 'New Timetable';

      if (!this.currentId) {
        return;
      }

      this.timetableService.getTimetable(this.currentId).subscribe( timetable => this.timetable = timetable,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });

    });

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
    let result, timetableValue = this.form.value;
    timetableValue.id = this.currentId;
    if(timetableValue.id) {
      result = this.timetableService.updateTimetable(timetableValue);
    } else {
      result = this.timetableService.addTimetable(timetableValue);
    }

    result.subscribe(data => this.router.navigate(['admin/timetables']));
  }

  deleteTrainer(index) {
    this.timetable.trainers.splice(index, 1);
  }

}
