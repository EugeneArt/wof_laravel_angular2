import { Component, OnInit } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Trainer } from "./trainer";

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.getTrainers().subscribe(trainers => {
      this.trainers = trainers;
    });
  }

  deleteTrainer(trainer) {
    if (confirm("Are you sure you want to delete " + trainer.trainer_name + "?")) {
      let index = this.trainers.indexOf(trainer);
      this.trainers.splice(index, 1);

      this.trainerService.deleteTrainer(trainer.id)
          .subscribe(null,
              err => {
                alert("Could not delete level.");
                // Revert the view back to its original state
                this.trainers.splice(index, 0, trainer);
              });
    }
  }

}
