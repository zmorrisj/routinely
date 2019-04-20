namespace routinely.Models
{
  public class ImgurAPI
  {
    public int recipeId { get; set; }
    public int difficulty { get; set; }
    public string name { get; set; }
    public bool isCookable { get; set; }

    public ImgurAPI() { }

    public ImgurAPI(int id, int difficulty, string name, bool isCookable)
    {
      this.recipeId = id;
      this.difficulty = difficulty;
      this.name = name;
      this.isCookable = isCookable;
    }
  }
}
