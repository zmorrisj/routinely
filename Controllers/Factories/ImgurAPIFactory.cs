using System.Collections.Generic;
using System.Linq;

namespace routinely.Models
{
  public class ImgurAPIFactory
  {
    private int ImgurPostCount { get; set; } = 0;
    public ImgurAPI CreateImgurPost(int difficulty, string name, bool isCookable = false)
        => new ImgurAPI(++this.ImgurPostCount, difficulty, name, isCookable);

    public IEnumerable<ImgurAPI> GetImgurPost()
    {
      return
          new ImgurAPI[]
          {
                    // Level 1 Recipes
                    this.CreateImgurPost(1, "Garden Salad"),
                    this.CreateImgurPost(1, "Grilled Cheese"),
                    this.CreateImgurPost(1, "White Cake"),
                    this.CreateImgurPost(1, "Chocolate Cake"),
                    this.CreateImgurPost(1, "Scrambled Eggs"),
                    this.CreateImgurPost(1, "Mac and Cheese"),
                    this.CreateImgurPost(1, "Hamburger Cake"),
                    this.CreateImgurPost(1, "Hambugers"),
                    this.CreateImgurPost(1, "Hot Dogs"),
                    this.CreateImgurPost(1, "Tofu Dogs"),
                    this.CreateImgurPost(1, "Veggie Burger"),
                    this.CreateImgurPost(1, "Classic Vanilla Cupcake"),
                    // Level 2 Recipes
                    this.CreateImgurPost(2, "Eggs and Toast"),
                    this.CreateImgurPost(2, "Chips and Salsa"),
                    this.CreateImgurPost(2, "BLT"),
                    this.CreateImgurPost(2, "Fish Tacos"),
                    this.CreateImgurPost(2, "High Energy Protein Plate"),
                    this.CreateImgurPost(2, "Minty Mocha"),
                    // Level 3 Recipes
                    this.CreateImgurPost(3, "Chocolate Chip Cookies"),
                    this.CreateImgurPost(3, "Pancakes"),
                    this.CreateImgurPost(3, "Pan Fried Tilapia"),
                    this.CreateImgurPost(3, "Silly Gummy Bear Pancakes"),
                    this.CreateImgurPost(3, "Flirty Heart Cookies"),
                    this.CreateImgurPost(3, "Taco Casserole"),
                    this.CreateImgurPost(3, "Chicken Sandwich"),
                    this.CreateImgurPost(3, "Carrot Cake"),
                    // Level 4 Recipes
                    this.CreateImgurPost(4, "Spaghetti"),
                    this.CreateImgurPost(4, "Stawberry Cake"),
                    this.CreateImgurPost(4, "Angry Flaming Spaghetti"),
                    this.CreateImgurPost(4, "Black and White Cookies"),
                    this.CreateImgurPost(4, "Butterscotchman Cupcakes"),
                    // Level 5 Recipes
                    this.CreateImgurPost(5, "French Toast"),
                    this.CreateImgurPost(5, "Fish and Chips"),
                    this.CreateImgurPost(5, "Signature Cake"),
                    this.CreateImgurPost(5, "Salmon"),
                    this.CreateImgurPost(5, "Strawberry Fizzy"),
                    // Level 6 Recipes
                    this.CreateImgurPost(6, "Chili"),
                    this.CreateImgurPost(6, "Blue Confetti Cake"),
                    this.CreateImgurPost(6, "Red Velvet Cupcakes"),
                    // Level 7 Recipes
                    this.CreateImgurPost(7, "Blackened Bass"),
                    this.CreateImgurPost(7, "Omelet"),
                    this.CreateImgurPost(7, "Steak"),
                    this.CreateImgurPost(7, "Super Chocolate Tummers Bomb"),
                    // Level 8 Recipes
                    this.CreateImgurPost(8, "Applie Pie"),
                    this.CreateImgurPost(8, "The Baconing Cupcakes"),
                    // Level 9 Recipes
                    this.CreateImgurPost(9, "Cippino"),
                    this.CreateImgurPost(9, "Chicken Stir Fry"),
                    // Level 10 Recipes
                    this.CreateImgurPost(10, "Tuna Casserole"),
                    this.CreateImgurPost(10, "Roast Chicken"),
          };
    }
  }
}
