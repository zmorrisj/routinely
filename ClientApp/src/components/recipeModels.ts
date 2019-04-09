export class Recipe {
    public recipeId: number;
    public difficulty: number;
    public name: string;
    public isCookable: boolean = false;
}

export class RecipeListItem {
    public level: number;
    public recipeCount: number = 0;
    public totalRecipeCount: number = 0;
    public recipeAchieved: boolean = false;

    public constructor(level: number) { this.level = level; }
}
