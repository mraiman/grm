import { RecipeService } from './../../../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as Classes from '../../../../classes/classes';
import { ShoppingListService } from '../../../../services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Classes.Recipe;
  paramsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipes()[id];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipes()[params['id']];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  logg(tb: HTMLButtonElement) {

  }

  addToShopping() {
    this.shoppingListService.addToShopping(this.recipe);
  }

}
