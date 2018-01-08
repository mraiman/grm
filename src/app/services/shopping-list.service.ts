import { Injectable } from '@angular/core';
import * as Classes from '../classes/classes';

@Injectable()
export class ShoppingListService {
  ingredients: Classes.Ingredient[] = [
    new Classes.Ingredient('Apples', 5),
    new Classes.Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  addIngredient(ing: Classes.Ingredient) {
    this.ingredients.push(ing);
  }

  addToShopping(recipe: Classes.Recipe) {
    this.ingredients.push(...recipe.ingredients);
  }

}
