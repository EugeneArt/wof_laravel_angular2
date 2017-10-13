import { Component, OnInit } from '@angular/core';
import { GymService } from './gym.service';
import {Gym} from "./gym";

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})

export class GymsComponent implements OnInit {

  private gyms: Gym[] = [];

  constructor(private gymService: GymService) {
  }

  ngOnInit() {
    this.gymService.getGyms().subscribe(data => {
      this.gyms = data;
    });
  }

  deleteGym(gym) {
    if (confirm("Are you sure you want to delete " + gym.gym_name + "?")) {
      let index = this.gyms.indexOf(gym);
      this.gyms.splice(index, 1);

      this.gymService.deleteGym(gym.id)
          .subscribe(null,
              err => {
                alert("Could not delete gym.");
                // Revert the view back to its original state
                this.gyms.splice(index, 0, gym);
              });
    }
  }

}