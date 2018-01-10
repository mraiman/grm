import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../classes/classes';
import { RecipeService } from '../../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  singleRecipe: Classes.Recipe;
  displayDetails = false;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Classes.Recipe) => {
      this.singleRecipe = recipe;
      this.displayDetails = true;
      const id = this.singleRecipe.id;
      this.router.navigate(['/udemy/2/recipes/', id]);
    });
  }

}
