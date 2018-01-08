import { Component, OnInit, Input } from '@angular/core';
import * as Classes from '../../../../classes/classes';
import { ShoppingListService } from '../../../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Classes.Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }

  logg(tb: HTMLButtonElement) {
    console.dir(tb);
  }

  addToShopping() {
    this.shoppingListService.addToShopping(this.recipe);
  }

}
