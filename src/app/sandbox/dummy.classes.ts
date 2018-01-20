export class Recipe {
    id: number;
    name: string;
    description: string;
    creator: User;
    likes: number;
    imagePath: string;
    imagePathUploaded: string;
    ingredients: Ingredient[];
    totalCost: number;
    calories: number;
    comments: Comment[];
}

export class User {
    id: string;
    name: string;
    photo: string;
    aboutMe: string;
    role: string;
    recipes: Recipe[];
    customIngredients: Ingredient[];
}

export class Ingredient {
    name: string;
    amount: number;
    amountUnit: string;
    price: number;
    priceUnit: string;
    icon: string;
    calories: number;
    custom: boolean;
}

export class Comment {
    comment: string;
    author: User;
}
