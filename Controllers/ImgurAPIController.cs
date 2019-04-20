using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using routinely.Models;

namespace routine_ly.Controllers
{
  [Route("api/imgur-api")]
  public class ImgurAPIController : Controller
  {
    [HttpGet("Get")]
    public IActionResult GetRecipeList()
    {
      Console.WriteLine(Ok(new ImgurAPIFactory().GetImgurPost()));
      return Ok(new ImgurAPIFactory().GetImgurPost());
    }

    [HttpPost("post-imgur-gallery-tag")]
    public IActionResult PostRecipeList([FromBody] IEnumerable<ImgurAPI> recipes)
    {
      return Ok(CookingSkill.Calculate(recipes));
    }
  }
}
