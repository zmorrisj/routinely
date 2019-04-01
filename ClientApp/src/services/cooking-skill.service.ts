import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookingSkillService {

  getRecipes() {
    return [
      // Level 1 Recipes
      { 'recipeId': 1, 'difficulty': 1, 'name': 'Garden Salad', 'isCookable': false },
      { 'recipeId': 2, 'difficulty': 1, 'name': 'Grilled Cheese', 'isCookable': false },
      { 'recipeId': 3, 'difficulty': 1, 'name': 'White Cake', 'isCookable': false },
      { 'recipeId': 4, 'difficulty': 1, 'name': 'Chocolate Cake', 'isCookable': false },
      { 'recipeId': 5, 'difficulty': 1, 'name': 'Scrambled Eggs', 'isCookable': false },
      { 'recipeId': 6, 'difficulty': 1, 'name': 'Mac and Cheese', 'isCookable': false },
      { 'recipeId': 7, 'difficulty': 1, 'name': 'Hamburger Cake', 'isCookable': false },
      { 'recipeId': 8, 'difficulty': 1, 'name': 'Hamburgers', 'isCookable': false },
      { 'recipeId': 9, 'difficulty': 1, 'name': 'Hot Dogs', 'isCookable': false },
      { 'recipeId': 10, 'difficulty': 1, 'name': 'Tofu Dogs', 'isCookable': false },
      { 'recipeId': 11, 'difficulty': 1, 'name': 'Veggie Burger', 'isCookable': false },
      { 'recipeId': 12, 'difficulty': 1, 'name': 'Classic Vanilla Cupcakes', 'isCookable': false },
      // Level 2 Recipes
      { 'recipeId': 13, 'difficulty': 2, 'name': 'Eggs and Toast', 'isCookable': false },
      { 'recipeId': 14, 'difficulty': 2, 'name': 'Chips and Salsa', 'isCookable': false },
      { 'recipeId': 15, 'difficulty': 2, 'name': 'BLT', 'isCookable': false },
      { 'recipeId': 16, 'difficulty': 2, 'name': 'Fish Tacos', 'isCookable': false },
      { 'recipeId': 17, 'difficulty': 2, 'name': 'High Energy Protein Plate', 'isCookable': false },
      { 'recipeId': 18, 'difficulty': 2, 'name': 'Minty Mocha', 'isCookable': false },
      // Level 3 Recipes
      { 'recipeId': 19, 'difficulty': 3, 'name': 'Chocolate Chip Cookies', 'isCookable': false },
      { 'recipeId': 20, 'difficulty': 3, 'name': 'Pancakes', 'isCookable': false },
      { 'recipeId': 21, 'difficulty': 3, 'name': 'Pan Fried Tilapia', 'isCookable': false },
      { 'recipeId': 22, 'difficulty': 3, 'name': 'Silly Gummy Bear Pancakes', 'isCookable': false },
      { 'recipeId': 23, 'difficulty': 3, 'name': 'Flirty Heart Cookies', 'isCookable': false },
      { 'recipeId': 24, 'difficulty': 3, 'name': 'Taco Casserole', 'isCookable': false },
      { 'recipeId': 25, 'difficulty': 3, 'name': 'Chicken Sandwich', 'isCookable': false },
      { 'recipeId': 26, 'difficulty': 3, 'name': 'Carrot Cake', 'isCookable': false },
      // Level 4 Recipes
      { 'recipeId': 27, 'difficulty': 4, 'name': 'Spaghetti', 'isCookable': false },
      { 'recipeId': 28, 'difficulty': 4, 'name': 'Strawberry Cake', 'isCookable': false },
      { 'recipeId': 29, 'difficulty': 4, 'name': 'Angry Flaming Spaghetti', 'isCookable': false },
      { 'recipeId': 30, 'difficulty': 4, 'name': 'Black and White Cookies', 'isCookable': false },
      { 'recipeId': 31, 'difficulty': 4, 'name': 'Butterscotchman Cupcakes', 'isCookable': false },
      // Level 5 Recipes
      { 'recipeId': 32, 'difficulty': 5, 'name': 'French Toast', 'isCookable': false },
      { 'recipeId': 33, 'difficulty': 5, 'name': 'Fish and Chips', 'isCookable': false },
      { 'recipeId': 34, 'difficulty': 5, 'name': 'Signature Cake', 'isCookable': false },
      { 'recipeId': 35, 'difficulty': 5, 'name': 'Salmon', 'isCookable': false },
      { 'recipeId': 36, 'difficulty': 5, 'name': 'Strawberry Fizzy', 'isCookable': false },
      // Level 6 Recipes
      { 'recipeId': 37, 'difficulty': 6, 'name': 'Chili', 'isCookable': false },
      { 'recipeId': 38, 'difficulty': 6, 'name': 'Blue Confetti Cake', 'isCookable': false },
      { 'recipeId': 39, 'difficulty': 6, 'name': 'Red Velvet Cupcakes', 'isCookable': false },
      // Level 7 Recipes
      { 'recipeId': 40, 'difficulty': 7, 'name': 'Blackened Bass', 'isCookable': false },
      { 'recipeId': 41, 'difficulty': 7, 'name': 'Omelet', 'isCookable': false },
      { 'recipeId': 42, 'difficulty': 7, 'name': 'Steak', 'isCookable': false },
      { 'recipeId': 43, 'difficulty': 7, 'name': 'Super Chocolate Tummers Bomb', 'isCookable': false },
      // Level 8 Recipes
      { 'recipeId': 44, 'difficulty': 8, 'name': 'Apple Pie', 'isCookable': false },
      { 'recipeId': 45, 'difficulty': 8, 'name': 'The Baconing Cupcakes', 'isCookable': false },
      // Level 9 Recipes
      { 'recipeId': 46, 'difficulty': 9, 'name': 'Cioppino', 'isCookable': false },
      { 'recipeId': 47, 'difficulty': 9, 'name': 'Chicken Stir Fry', 'isCookable': false },
      // Level 10 Recipes
      { 'recipeId': 48, 'difficulty': 10, 'name': 'Tuna Casserole', 'isCookable': false },
      { 'recipeId': 49, 'difficulty': 10, 'name': 'Roast Chicken', 'isCookable': false },
    ];
  }

}
