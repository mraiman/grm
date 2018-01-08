import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../classes/classes';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  singleRecipe: Classes.Recipe;
  displayDetails = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Classes.Recipe) => {
      this.singleRecipe = recipe;
      console.dir(this.singleRecipe);
      this.displayDetails = true;
    });
  }

}
