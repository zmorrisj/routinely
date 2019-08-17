namespace routinely.Models
{
  public class Routine
  {
    public int recipeId { get; set; }
    public int difficulty { get; set; }
    public string name { get; set; }
    public bool isCookable { get; set; }

    public Routine() { }

    public Routine(int id, int difficulty, string name, bool isCookable)
    {
      this.recipeId = id;
      this.difficulty = difficulty;
      this.name = name;
      this.isCookable = isCookable;
    }
  }
}
