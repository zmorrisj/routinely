import { Component, OnInit } from '@angular/core';
import { RoutinelyAPIService } from 'src/services/routinely-api.service';
import { Routine } from '../RoutinelyAPIModels';

@Component({
  selector: 'app-routines-list-component',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.scss']
})
export class RoutinesListComponent implements OnInit {

  public Routines: Array<Routine>;

  public CookingSkill = 0;

  public CookingSkillBadgeClass = 'badge-light';

  constructor(
    private _routinelyAPIService: RoutinelyAPIService
  ) { }

  ngOnInit(): void {
    this._routinelyAPIService.getRoutinesController()
      .subscribe(
        (a: Array<Routine>) => {
          this.Routines = a;
        }
      );
  }

}
