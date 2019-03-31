import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookingSkillService {

  getRecipes() {
    return [
      { 'recipeId': 1, 'difficulty': '1', 'name': 'Grilled Cheese' },
      { 'recipeId': 2, 'difficulty': '1', 'name': 'Garden Salad' }
    ];
  }

}
