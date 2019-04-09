using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using routinely.Models;

namespace routine_ly.Controllers
{
    [Route("api/Recipe")]
    public class RecipeController : Controller
    {
        [HttpGet("Get")]
        public IActionResult GetRecipeList()
        {
            return Ok(new RecipeFactory().GetRecipes());
        }

        [HttpPost("Calc")]
        public IActionResult PostRecipeList([FromBody] IEnumerable<Recipe> recipes)
        {
            return Ok(CookingSkill.Calculate(recipes));
        }
    }
}
