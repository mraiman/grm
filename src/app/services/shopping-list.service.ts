import { Injectable } from '@angular/core';
import * as Classes from '../classes/classes';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredients: Classes.Ingredient[] = [
    new Classes.Ingredient('Apples', 5),
    new Classes.Ingredient('Tomatoes', 10)
  ];

  startedEditing = new Subject<number>();

  constructor() { }

  addIngredient(ing: Classes.Ingredient) {
    this.ingredients.push(ing);
  }

  addToShopping(recipe: Classes.Recipe) {
    this.ingredients.push(...recipe.ingredients);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Classes.Ingredient) {
    this.ingredients[index] = newIngredient;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

}
