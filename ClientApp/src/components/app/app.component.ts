import { Component, OnInit } from '@angular/core';
import { CookingSkillService } from 'src/services/cooking-skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: String = 'routine.ly';

  public recipes: Array<any>;

  public cookingSkill = 0;

  public cookingSkillBadgeClass = 'badge-light';

  public recipeList = [
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

  constructor(
    private _cookingSkillService: CookingSkillService
  ) { }

  ngOnInit(): void {
    this.recipes = this._cookingSkillService.getRecipes();
  }

  public changeResponse(response: boolean, index: number): void {
    this.recipes[index].isCookable = response;
  }

  public calculateCookingSkill(): void {
    // Reset values
    let maxLevel = 0;
    let lowerLevelsUnachieved = 0;
    this.recipeList = [
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

    for (let i = 0; i < this.recipes.length; i++) {
      // Set total recipe count per difficulty
      if (this.recipes[i].difficulty === 1) { this.recipeList[0].totalRecipeCount = this.recipeList[0].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 2) { this.recipeList[1].totalRecipeCount = this.recipeList[1].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 3) { this.recipeList[2].totalRecipeCount = this.recipeList[2].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 4) { this.recipeList[3].totalRecipeCount = this.recipeList[3].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 5) { this.recipeList[4].totalRecipeCount = this.recipeList[4].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 6) { this.recipeList[5].totalRecipeCount = this.recipeList[5].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 7) { this.recipeList[6].totalRecipeCount = this.recipeList[6].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 8) { this.recipeList[7].totalRecipeCount = this.recipeList[7].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 9) { this.recipeList[8].totalRecipeCount = this.recipeList[8].totalRecipeCount + 1; }
      if (this.recipes[i].difficulty === 10) { this.recipeList[9].totalRecipeCount = this.recipeList[9].totalRecipeCount + 1; }

      // Set user recipe count per difficulty
      if (this.recipes[i].isCookable === true) {
        if (this.recipes[i].difficulty === 1) { this.recipeList[0].recipeCount = this.recipeList[0].recipeCount + 1; }
        if (this.recipes[i].difficulty === 2) { this.recipeList[1].recipeCount = this.recipeList[1].recipeCount + 1; }
        if (this.recipes[i].difficulty === 3) { this.recipeList[2].recipeCount = this.recipeList[2].recipeCount + 1; }
        if (this.recipes[i].difficulty === 4) { this.recipeList[3].recipeCount = this.recipeList[3].recipeCount + 1; }
        if (this.recipes[i].difficulty === 5) { this.recipeList[4].recipeCount = this.recipeList[4].recipeCount + 1; }
        if (this.recipes[i].difficulty === 6) { this.recipeList[5].recipeCount = this.recipeList[5].recipeCount + 1; }
        if (this.recipes[i].difficulty === 7) { this.recipeList[6].recipeCount = this.recipeList[6].recipeCount + 1; }
        if (this.recipes[i].difficulty === 8) { this.recipeList[7].recipeCount = this.recipeList[7].recipeCount + 1; }
        if (this.recipes[i].difficulty === 9) { this.recipeList[8].recipeCount = this.recipeList[8].recipeCount + 1; }
        if (this.recipes[i].difficulty === 10) { this.recipeList[9].recipeCount = this.recipeList[9].recipeCount + 1; }
      }
    }

    // Set recipe achieved boolean per difficulty
    if (this.recipeList[0].recipeCount / this.recipeList[0].totalRecipeCount >= 0.5) { this.recipeList[0].recipeAchieved = true; }
    if (this.recipeList[1].recipeCount / this.recipeList[1].totalRecipeCount >= 0.5) { this.recipeList[1].recipeAchieved = true; }
    if (this.recipeList[2].recipeCount / this.recipeList[2].totalRecipeCount >= 0.5) { this.recipeList[2].recipeAchieved = true; }
    if (this.recipeList[3].recipeCount / this.recipeList[3].totalRecipeCount >= 0.5) { this.recipeList[3].recipeAchieved = true; }
    if (this.recipeList[4].recipeCount / this.recipeList[4].totalRecipeCount >= 0.5) { this.recipeList[4].recipeAchieved = true; }
    if (this.recipeList[5].recipeCount / this.recipeList[5].totalRecipeCount >= 0.5) { this.recipeList[5].recipeAchieved = true; }
    if (this.recipeList[6].recipeCount / this.recipeList[6].totalRecipeCount >= 0.5) { this.recipeList[6].recipeAchieved = true; }
    if (this.recipeList[7].recipeCount / this.recipeList[7].totalRecipeCount >= 0.5) { this.recipeList[7].recipeAchieved = true; }
    if (this.recipeList[8].recipeCount / this.recipeList[8].totalRecipeCount >= 0.5) { this.recipeList[8].recipeAchieved = true; }
    if (this.recipeList[9].recipeCount / this.recipeList[9].totalRecipeCount >= 0.5) { this.recipeList[9].recipeAchieved = true; }

    for (let i = 0; i < this.recipeList.length; i++) {
      if (this.recipeList[i].recipeAchieved) { maxLevel = Math.max(this.recipeList[i].level); }
    }

    for (let i = 0; i < this.recipeList.length; i++) {
      if (!this.recipeList[i].recipeAchieved && this.recipeList[i].level < maxLevel) { lowerLevelsUnachieved++; }
    }

    console.log(this.recipeList);
    console.log('recipeLevel1AchievedCalc: ', this.recipeList[0].recipeCount / this.recipeList[0].totalRecipeCount);
    console.log('recipeLevel2AchievedCalc: ', this.recipeList[1].recipeCount / this.recipeList[1].totalRecipeCount);
    console.log('recipeLevel3AchievedCalc: ', this.recipeList[2].recipeCount / this.recipeList[2].totalRecipeCount);
    console.log('recipeLevel4AchievedCalc: ', this.recipeList[3].recipeCount / this.recipeList[3].totalRecipeCount);
    console.log('recipeLevel5AchievedCalc: ', this.recipeList[4].recipeCount / this.recipeList[4].totalRecipeCount);
    console.log('recipeLevel6AchievedCalc: ', this.recipeList[5].recipeCount / this.recipeList[5].totalRecipeCount);
    console.log('recipeLevel7AchievedCalc: ', this.recipeList[6].recipeCount / this.recipeList[6].totalRecipeCount);
    console.log('recipeLevel8AchievedCalc: ', this.recipeList[7].recipeCount / this.recipeList[7].totalRecipeCount);
    console.log('recipeLevel9AchievedCalc: ', this.recipeList[8].recipeCount / this.recipeList[8].totalRecipeCount);
    console.log('recipeLevel10AchievedCalc: ', this.recipeList[9].recipeCount / this.recipeList[9].totalRecipeCount);
    console.log('lowerLevelsUnachieved: ', lowerLevelsUnachieved);
    console.log('maxLevel', maxLevel);

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
    this.recipeList = [
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

}
