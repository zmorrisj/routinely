export class Routine {
    public recipeId: number;
    public difficulty: number;
    public name: string;
    public isCookable: boolean = false;
}

export class RoutineItem {
    public level: number;
    public recipeCount: number = 0;
    public totalRecipeCount: number = 0;
    public recipeAchieved: boolean = false;

    public constructor(level: number) { this.level = level; }
}
