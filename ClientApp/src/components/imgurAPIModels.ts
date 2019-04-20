// export class RecipeListItem {
//     public level: number;
//     public recipeCount: number = 0;
//     public totalRecipeCount: number = 0;
//     public recipeAchieved: boolean = false;

//     public constructor(level: number) { this.level = level; }
// }

export class ImgurAPI {
    public recipeId: number;
    public difficulty: number;
    public name: string;
    public isCookable: boolean = false;
}

export class ImgurAPIItem {
    public level: number;
    public recipeCount: number = 0;
    public totalRecipeCount: number = 0;
    public recipeAchieved: boolean = false;

    public constructor(level: number) { this.level = level; }
}
