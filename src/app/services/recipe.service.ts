import { Injectable, EventEmitter } from '@angular/core';
import * as Classes from '../classes/classes';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Classes.Recipe>();
  private recipes: Classes.Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Classes.Recipe('A Test Recipe',
      'test desc',
      'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [new Classes.Ingredient('meat', 1), new Classes.Ingredient('yter', 1)]),
    new Classes.Recipe('Good Recipe', 'my text', 'https://eda.sakh.com/resources/images/site/cuisines-2.0/sushi.jpg',
      [new Classes.Ingredient('dgfdt', 2), new Classes.Ingredient('milk', 1)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
