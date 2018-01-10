export class UdemyLesson {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public id?: number;

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], id?: number) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.id = id;
    }
}

export class Ingredient {

    constructor(public name: string, public amount: number) { }
}
