import { Component, OnInit } from '@angular/core';
import { CookingSkillService } from 'src/services/cooking-skill.service';
import { HelperMethodsService } from 'src/services/helper-methods.service';
import { Recipe, RecipeListItem } from '../recipeModels';

@Component({
  selector: 'app-cooking-skill-component',
  templateUrl: './cooking-skill.component.html',
  styleUrls: ['./cooking-skill.component.scss']
})
export class CookingSkillComponent implements OnInit {

  public recipes: Array<Recipe> = [];

  public cookingSkill = 0;

  public cookingSkillBadgeClass = 'badge-light';

  constructor(
    private _cookingSkillService: CookingSkillService
  ) { }

  ngOnInit(): void {
    this._cookingSkillService.getFromDataberse()
      .subscribe(
        (recipes) => {
          this.recipes = recipes;
          console.log('Datrberse: ', this.recipes);
        }
      );
  }

  public changeResponse(response: boolean, index: number): void {
    this.recipes[index].isCookable = response;
  }

  public calculateCookingSkill(): void {
    this._cookingSkillService.CalculateSkill(this.recipes)
      .subscribe(
        calculatedSkill => {
          this.cookingSkill = calculatedSkill;

          // Determine cooking skill badge color
          if (this.cookingSkill >= 0 && this.cookingSkill < 4) {
            this.cookingSkillBadgeClass = 'badge-danger';
          } else if (this.cookingSkill >= 4 && this.cookingSkill < 7) {
            this.cookingSkillBadgeClass = 'badge-secondary';
          } else {
            this.cookingSkillBadgeClass = 'badge-success';
          }
        });
  }

  public resetCookingSkill(cookableDefault = false): void {
    this.cookingSkill = 0;
    this.cookingSkillBadgeClass = 'badge-light';
    this.recipes.forEach(r => r.isCookable = cookableDefault);
  }

}
