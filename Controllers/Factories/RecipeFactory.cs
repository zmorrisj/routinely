using System.Collections.Generic;
using System.Linq;

namespace routinely.Models
{
    public class RecipeFactory
    {
        private int RecipeCount { get; set; } = 0;
        public Recipe CreateRecipe(int difficulty, string name, bool isCookable = false)
            => new Recipe(++this.RecipeCount, difficulty, name, isCookable);

        public IEnumerable<Recipe> GetRecipes()
        {
            return
                new Recipe[]
                {
                    // Level 1 Recipes
                    this.CreateRecipe(1, "Garden Salad"),
                    this.CreateRecipe(1, "Grilled Cheese"),
                    this.CreateRecipe(1, "White Cake"),
                    this.CreateRecipe(1, "Chocolate Cake"),
                    this.CreateRecipe(1, "Scrambled Eggs"),
                    this.CreateRecipe(1, "Mac and Cheese"),
                    this.CreateRecipe(1, "Hamburger Cake"),
                    this.CreateRecipe(1, "Hambugers"),
                    this.CreateRecipe(1, "Hot Dogs"),
                    this.CreateRecipe(1, "Tofu Dogs"),
                    this.CreateRecipe(1, "Veggie Burger"),
                    this.CreateRecipe(1, "Classic Vanilla Cupcake"),
                    // Level 2 Recipes
                    this.CreateRecipe(2, "Eggs and Toast"),
                    this.CreateRecipe(2, "Chips and Salsa"),
                    this.CreateRecipe(2, "BLT"),
                    this.CreateRecipe(2, "Fish Tacos"),
                    this.CreateRecipe(2, "High Energy Protein Plate"),
                    this.CreateRecipe(2, "Minty Mocha"),
                    // Level 3 Recipes
                    this.CreateRecipe(3, "Chocolate Chip Cookies"),
                    this.CreateRecipe(3, "Pancakes"),
                    this.CreateRecipe(3, "Pan Fried Tilapia"),
                    this.CreateRecipe(3, "Silly Gummy Bear Pancakes"),
                    this.CreateRecipe(3, "Flirty Heart Cookies"),
                    this.CreateRecipe(3, "Taco Casserole"),
                    this.CreateRecipe(3, "Chicken Sandwich"),
                    this.CreateRecipe(3, "Carrot Cake"),
                    // Level 4 Recipes
                    this.CreateRecipe(4, "Spaghetti"),
                    this.CreateRecipe(4, "Stawberry Cake"),
                    this.CreateRecipe(4, "Angry Flaming Spaghetti"),
                    this.CreateRecipe(4, "Black and White Cookies"),
                    this.CreateRecipe(4, "Butterscotchman Cupcakes"),
                    // Level 5 Recipes
                    this.CreateRecipe(5, "French Toast"),
                    this.CreateRecipe(5, "Fish and Chips"),
                    this.CreateRecipe(5, "Signature Cake"),
                    this.CreateRecipe(5, "Salmon"),
                    this.CreateRecipe(5, "Strawberry Fizzy"),
                    // Level 6 Recipes
                    this.CreateRecipe(6, "Chili"),
                    this.CreateRecipe(6, "Blue Confetti Cake"),
                    this.CreateRecipe(6, "Red Velvet Cupcakes"),
                    // Level 7 Recipes
                    this.CreateRecipe(7, "Blackened Bass"),
                    this.CreateRecipe(7, "Omelet"),
                    this.CreateRecipe(7, "Steak"),
                    this.CreateRecipe(7, "Super Chocolate Tummers Bomb"),
                    // Level 8 Recipes
                    this.CreateRecipe(8, "Applie Pie"),
                    this.CreateRecipe(8, "The Baconing Cupcakes"),
                    // Level 9 Recipes
                    this.CreateRecipe(9, "Cippino"),
                    this.CreateRecipe(9, "Chicken Stir Fry"),
                    // Level 10 Recipes
                    this.CreateRecipe(10, "Tuna Casserole"),
                    this.CreateRecipe(10, "Roast Chicken"),
                };
        }
    }
}
