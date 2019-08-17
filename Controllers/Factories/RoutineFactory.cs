using System.Collections.Generic;
using System.Linq;

namespace routinely.Models
{
  public class RoutineFactory
  {
    private int RoutineCount { get; set; } = 0;
    public Routine CreateRoutine(int difficulty, string name, bool isCookable = false)
        => new Routine(++this.RoutineCount, difficulty, name, isCookable);

    public IEnumerable<Routine> GetRoutine()
    {
      return
          new Routine[]
          {
                    // Level 1 Recipes
                    this.CreateRoutine(1, "Garden Salad"),
                    this.CreateRoutine(1, "Grilled Cheese"),
                    this.CreateRoutine(1, "White Cake"),
                    this.CreateRoutine(1, "Chocolate Cake"),
                    this.CreateRoutine(1, "Scrambled Eggs"),
                    this.CreateRoutine(1, "Mac and Cheese"),
                    this.CreateRoutine(1, "Hamburger Cake"),
                    this.CreateRoutine(1, "Hambugers"),
                    this.CreateRoutine(1, "Hot Dogs"),
                    this.CreateRoutine(1, "Tofu Dogs"),
                    this.CreateRoutine(1, "Veggie Burger"),
                    this.CreateRoutine(1, "Classic Vanilla Cupcake"),
                    // Level 2 Recipes
                    this.CreateRoutine(2, "Eggs and Toast"),
                    this.CreateRoutine(2, "Chips and Salsa"),
                    this.CreateRoutine(2, "BLT"),
                    this.CreateRoutine(2, "Fish Tacos"),
                    this.CreateRoutine(2, "High Energy Protein Plate"),
                    this.CreateRoutine(2, "Minty Mocha"),
                    // Level 3 Recipes
                    this.CreateRoutine(3, "Chocolate Chip Cookies"),
                    this.CreateRoutine(3, "Pancakes"),
                    this.CreateRoutine(3, "Pan Fried Tilapia"),
                    this.CreateRoutine(3, "Silly Gummy Bear Pancakes"),
                    this.CreateRoutine(3, "Flirty Heart Cookies"),
                    this.CreateRoutine(3, "Taco Casserole"),
                    this.CreateRoutine(3, "Chicken Sandwich"),
                    this.CreateRoutine(3, "Carrot Cake"),
                    // Level 4 Recipes
                    this.CreateRoutine(4, "Spaghetti"),
                    this.CreateRoutine(4, "Stawberry Cake"),
                    this.CreateRoutine(4, "Angry Flaming Spaghetti"),
                    this.CreateRoutine(4, "Black and White Cookies"),
                    this.CreateRoutine(4, "Butterscotchman Cupcakes"),
                    // Level 5 Recipes
                    this.CreateRoutine(5, "French Toast"),
                    this.CreateRoutine(5, "Fish and Chips"),
                    this.CreateRoutine(5, "Signature Cake"),
                    this.CreateRoutine(5, "Salmon"),
                    this.CreateRoutine(5, "Strawberry Fizzy"),
                    // Level 6 Recipes
                    this.CreateRoutine(6, "Chili"),
                    this.CreateRoutine(6, "Blue Confetti Cake"),
                    this.CreateRoutine(6, "Red Velvet Cupcakes"),
                    // Level 7 Recipes
                    this.CreateRoutine(7, "Blackened Bass"),
                    this.CreateRoutine(7, "Omelet"),
                    this.CreateRoutine(7, "Steak"),
                    this.CreateRoutine(7, "Super Chocolate Tummers Bomb"),
                    // Level 8 Recipes
                    this.CreateRoutine(8, "Applie Pie"),
                    this.CreateRoutine(8, "The Baconing Cupcakes"),
                    // Level 9 Recipes
                    this.CreateRoutine(9, "Cippino"),
                    this.CreateRoutine(9, "Chicken Stir Fry"),
                    // Level 10 Recipes
                    this.CreateRoutine(10, "Tuna Casserole"),
                    this.CreateRoutine(10, "Roast Chicken"),
          };
    }
  }
}
