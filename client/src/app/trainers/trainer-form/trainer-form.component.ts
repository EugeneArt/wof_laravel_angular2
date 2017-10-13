import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Trainer } from "../trainer";
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['../trainers.component.css']
})

export class TrainerFormComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({
    url:'http://localhost/~eugeneart/laravel_angular4/server/public/api/files'
  });

  form: FormGroup;
  title: string;
  trainer: Trainer = new Trainer;
  currentId: number;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private trainerService: TrainerService
  ) {
    this.form = formBuilder.group({
      trainer_name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      trainer_tagline: ['', [
        Validators.minLength(3)
      ]],
      trainer_achievements: ['', [
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit trainer': 'New trainer';

      if(!this.currentId) {
        return;
      }

      this.trainerService.getTrainer(this.currentId).subscribe( trainer => this.trainer = trainer,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

    if(this.currentId) {
      this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
        form.append('image',this.trainer.trainer_img);
      };
    }

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.trainer.trainer_img = response;
    };
  }

  save() {
    let result, trainerValue = this.form.value;

    trainerValue.id = this.currentId;
    trainerValue.trainer_img = this.trainer.trainer_img;

    if(trainerValue.id) {
      result = this.trainerService.updateTrainer(trainerValue);
    } else {
      result = this.trainerService.addTrainer(trainerValue);
    }

    result.subscribe(data => this.router.navigate(['admin/trainers']));
  }

}
