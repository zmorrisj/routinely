using System;
using System.Collections.Generic;
using System.Linq;

namespace routinely.Models
{
    public class CookingSkill
    {
        public static int Calculate(IEnumerable<Recipe> recipe)
        {
            if (recipe is null || recipe.Count() == 0) { return 0; }
            var skills =
             recipe
                 .GroupBy(r => r.difficulty)
                 .Select(g => new SkillLevel(g.Key, g.ToList()));

            var maxLevel =
                skills.Aggregate(0, (curr, skill) => skill.IsAchieved && skill.Difficulty > curr ? skill.Difficulty : curr);

            var unachievedLevels =
                skills
                    .Where(s => s.Difficulty < maxLevel && !s.IsAchieved).Count();

            return maxLevel - unachievedLevels;
        }
    }

    public sealed class SkillLevel
    {
        public int Difficulty { get; }
        public int RecipeCount { get; }
        public int AchievedCount { get; }

        public bool IsAchieved
        {
            get
            {
                return AchievedCount / (double)RecipeCount >= 0.5;
            }
        }

        public SkillLevel(int difficulty, IEnumerable<Recipe> res)
        {
            this.Difficulty = difficulty;
            this.RecipeCount = res.Count();
            this.AchievedCount = res.Where(r => r.isCookable).Count();
        }
    }
}
