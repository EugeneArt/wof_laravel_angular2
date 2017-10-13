import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Exercise } from "../exercise";
import { Image } from "../image/image";

import { ExerciseService } from '../exercise.service';
import { ImageService } from '../image/image.service';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['../exercises.component.css']
})

export class ExerciseFormComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({
    url:'http://localhost/~eugeneart/api/public/api/files'
  });
  public uploaderForImages:FileUploader = new FileUploader({
    url:'http://localhost/~eugeneart/api/public/api/files'
  });

  form: FormGroup;
  title: string;
  exercise: Exercise = new Exercise;
  currentId: number;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private exerciseService: ExerciseService,
      private imageService: ImageService
  ) {
    this.form = formBuilder.group({
      exercise_name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      exercise_description: ['', [
        Validators.minLength(3)
      ]],
    });
    this.exercise.images = [];
  }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit exercise': 'New exercise';

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

    if(this.currentId) {
      this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
        form.append('image',this.exercise.exercise_video);
      };
    }

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.exercise.exercise_video = response;
    };

    this.uploaderForImages.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.exercise.images.push(response);
    };
  }

  save() {
    let result, exerciseValue = this.form.value;

    exerciseValue.id = this.currentId;
    exerciseValue.exercise_video = this.exercise.exercise_video;
    exerciseValue.images = this.exercise.images;

    if(exerciseValue.id) {
      result = this.exerciseService.updateExercise(exerciseValue);
    } else {
      result = this.exerciseService.addExercise(exerciseValue);
    }

    result.subscribe(data => this.router.navigate(['admin/exercises']));
  }

  deleteImage(image) {
    let index = this.exercise.images.indexOf(image);
    this.exercise.images.splice(index, 1);

    this.imageService.deleteImage(image.id)
        .subscribe(null,
            err => {
              alert("Could not delete image.");
              this.exercise.images.splice(index, 0, image);
            });
  }

}
