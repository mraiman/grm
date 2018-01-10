import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../../classes/classes';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Classes.Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    let id = 0;
    for (const recipe of this.recipes) {
      recipe.id = id;
      id++;
    }
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
