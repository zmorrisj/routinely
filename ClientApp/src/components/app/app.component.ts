import { Component, OnInit } from '@angular/core';
import { CookingSkillService } from 'src/services/cooking-skill.service';
import { HelperMethodsService } from 'src/services/helper-methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public recipes: Array<any>;

  public recipesMaxIndex: Number = 0;

  public cookingSkill = 0;

  public cookingSkillBadgeClass = 'badge-light';

  public recipeList = [];

  public maxIndex = 0;

  constructor(
    private _cookingSkillService: CookingSkillService,
    private _helperMethodsService: HelperMethodsService
  ) { }

  ngOnInit(): void {
    this.recipes = this._cookingSkillService.getRecipes();
    this.maxIndex = this.recipes.length - 1;
  }

  public changeResponse(response: boolean, index: number): void {
    this.recipes[index].isCookable = response;
  }

  public resetRecipeList(): Array<any> {
    return this.recipeList = [
      { 'level': 1, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 2, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 3, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 4, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 5, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 6, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 7, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 8, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 9, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
      { 'level': 10, 'recipeCount': 0, 'totalRecipeCount': 0, 'recipeAchieved': false },
    ];
  }

  public calculateCookingSkill(): void {
    // Reset values
    let maxLevel = 0;
    let lowerLevelsUnachieved = 0;
    this.resetRecipeList();

    for (let i = 0; i < this.recipes.length; i++) {

      for (let x = 0; x < this.recipeList.length; x++) {
        // Set total recipe count per difficulty
        if (this.recipes[i].difficulty === x + 1) { this.recipeList[x].totalRecipeCount = this.recipeList[x].totalRecipeCount + 1; }

        // Set user recipe count per difficulty
        if (this.recipes[i].isCookable === true) {
          if (this.recipes[i].difficulty === x + 1) { this.recipeList[x].recipeCount = this.recipeList[x].recipeCount + 1; }
        }
      }

    }

    for (let i = 0; i < this.recipeList.length; i++) {
      // Set recipe achieved boolean per difficulty
      if (this.recipeList[i].recipeCount / this.recipeList[i].totalRecipeCount >= 0.5) { this.recipeList[i].recipeAchieved = true; }
    }

    for (let i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].recipeAchieved) { maxLevel = Math.max(this.recipeList[i].level); }
    }

    for (let i = 0; i < this.recipeList.length; i++) {
      if (!this.recipeList[i].recipeAchieved && this.recipeList[i].level < maxLevel) { lowerLevelsUnachieved++; }
    }

    // Set the max-index of the recipes array
    this.recipesMaxIndex = this._helperMethodsService.indexOfMax(this.recipes);

    // Determine cooking skill
    this.cookingSkill = maxLevel - lowerLevelsUnachieved;

    // Determine cooking skill badge color
    if (this.cookingSkill >= 0 && this.cookingSkill < 4) {
      this.cookingSkillBadgeClass = 'badge-danger';
    } else if (this.cookingSkill >= 4 && this.cookingSkill < 7) {
      this.cookingSkillBadgeClass = 'badge-secondary';
    } else {
      this.cookingSkillBadgeClass = 'badge-success';
    }

  }

  public resetCookingSkill(): void {
    this.cookingSkill = 0;
    this.cookingSkillBadgeClass = 'badge-light';
    for (let i = 0; i < this.recipes.length; i++) {
      this.recipes[i].isCookable = false;
    }
    this.resetRecipeList();
  }

}
