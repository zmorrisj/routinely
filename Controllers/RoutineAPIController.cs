using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using routinely.Models;

namespace routine_ly.Controllers
{
  [Route("api/routine")]
  public class RoutineController : Controller
  {
    [HttpGet("Get")]
    public IActionResult GetRoutines()
    {
      Console.WriteLine(Ok(new RoutineFactory().GetRoutine()));
      return Ok(new RoutineFactory().GetRoutine());
    }

    // [HttpPost("post-imgur-gallery-tag")]
    // public IActionResult PostRecipeList([FromBody] IEnumerable<Routine> recipes)
    // {
    //   return Ok(CookingSkill.Calculate(recipes));
    // }
  }
}
