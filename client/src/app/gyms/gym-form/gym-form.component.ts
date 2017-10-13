import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Gym} from "../gym";
import { GymService } from '../gym.service';

@Component({
  selector: 'app-gym-form',
  templateUrl: './gym-form.component.html',
  styleUrls: ['../gyms.component.css']
})
export class GymFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  gym: Gym = new Gym;
  currentId: number;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private gymService: GymService
  ) {
    this.form = formBuilder.group({
      gym_name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit gym': 'New Gym';

      if(!this.currentId) {
        return;
      }

      this.gymService.getGym(this.currentId).subscribe( gym => this.gym = gym,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result, gymValue = this.form.value;
    gymValue.id = this.currentId;
    if(gymValue.id) {
      result = this.gymService.updateGym(gymValue);
    } else {
      result = this.gymService.addGym(gymValue);
    }

    result.subscribe(data => this.router.navigate(['admin/gyms']));
  }

}
