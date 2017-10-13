import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { TrainerService } from '../trainer.service';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['../trainers.component.css']
})
export class TrainerComponent implements OnInit {

  trainer: Trainer = new Trainer;
  currentId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private trainerService: TrainerService) { }

  ngOnInit() {
    const id  = this.route.params.subscribe(params => {
      this.currentId = params['id'];

      if (!this.currentId) {
        return;
      }

      this.trainerService.getTrainer(this.currentId).subscribe( trainer => this.trainer = trainer,
          response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

}
