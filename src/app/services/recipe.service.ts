import { AuthService } from './auth.service';
import { Recipe } from './../classes/classes';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import * as Classes from '../classes/classes';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operator/map';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Classes.Recipe[]>();
  recipeSelected = new EventEmitter<Classes.Recipe>();
  listUpdated = new Subject<boolean>();
  recipeDeleted = new Subject<boolean>();

  private recipes: Classes.Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Classes.Recipe('A Test Recipe',
      'test desc',
      'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [new Classes.Ingredient('meat', 1), new Classes.Ingredient('yter', 1)]),
    new Classes.Recipe('Good Recipe', 'my text', 'https://eda.sakh.com/resources/images/site/cuisines-2.0/sushi.jpg',
      [new Classes.Ingredient('dgfdt', 2), new Classes.Ingredient('milk', 1)])
  ];

  constructor(private http: HttpClient, private authService: AuthService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addRecipe(recipe: Classes.Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Classes.Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    this.recipesChanged.next(this.recipes.slice());
    this.recipeDeleted.next(true);
  }

  storeRecipes() {
    const token = this.authService.getToken();

    // return this.http.put('https://udemy-ng-http-abae0.firebaseio.com/recipes.json', this.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer hdiuhduqwhd').append('name', 'value')
    // });

    const req = new HttpRequest('PUT', 'https://udemy-ng-http-abae0.firebaseio.com/recipes.json', this.getRecipes(),
      { reportProgress: true, params: new HttpParams().set('auth', token) });
    return this.http.request(req);
  }

  getRecipesFromDB() {
    const token = this.authService.getToken();

    this.http.get('https://udemy-ng-http-abae0.firebaseio.com/recipes.json?auth=' + token, {
      // body:
      // headers:
      // observe: 'response',
      // responseType: 'text'
    }).map((response: Classes.Recipe[]) => {
      const recipes: Classes.Recipe[] = response;
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }).subscribe((result: Classes.Recipe[]) => {
      this.recipes = result;
      this.recipesChanged.next(this.recipes);
      console.log(this.recipes);
    });
  }

}
