import { Component } from '@angular/core';
import { CookingSkillService } from 'src/services/cooking-skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string = 'routine.ly';

  public recipes: Array<any>;

  constructor(
    private _cookingSkillService: CookingSkillService
  ) { }

  ngOnInit() {
    this.recipes = this._cookingSkillService.getRecipes();
  }

}
