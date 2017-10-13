import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Level } from "../level";
import { LevelService } from '../level.service';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['../levels.component.css']
})
export class LevelFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  level: Level = new Level;
  currentId: number;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private levelService: LevelService
  ) {
    this.form = formBuilder.group({
      level_name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      level_color: ['', [
        Validators.required,
        Validators.maxLength(7)
      ]],

    });
  }

  ngOnInit() {
    let id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      this.title = this.currentId? 'Edit level': 'New level';

      if(!this.currentId) {
        return;
      }

      this.levelService.getLevel(this.currentId).subscribe( level => this.level = level,
          response => {
            if(response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    let result, levelValue = this.form.value;
    levelValue.id = this.currentId;
    if(levelValue.id) {
      result = this.levelService.updateLevel(levelValue);
    } else {
      result = this.levelService.addLevel(levelValue);
    }

    result.subscribe(data => this.router.navigate(['admin/levels']));
  }

}
