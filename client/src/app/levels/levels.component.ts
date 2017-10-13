import { Component, OnInit } from '@angular/core';
import { LevelService } from './level.service';
import { Level } from "./level";

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  levels: Level[] = [];

  constructor(private levelService: LevelService) { }

  ngOnInit() {
    this.levelService.getLevels().subscribe(levels => {
      this.levels = levels;
    });
  }

  deleteLevel(level) {
    if (confirm("Are you sure you want to delete " + level.level_name + "?")) {
      let index = this.levels.indexOf(level);
      this.levels.splice(index, 1);

      this.levelService.deleteLevel(level.id)
          .subscribe(null,
              err => {
                alert("Could not delete level.");
                // Revert the view back to its original state
                this.levels.splice(index, 0, level);
              });
    }
  }

}
