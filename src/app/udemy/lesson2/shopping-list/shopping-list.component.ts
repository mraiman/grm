import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../classes/classes';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Classes.Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

  addIngredient(ing: Classes.Ingredient) {
    this.shoppingListService.addIngredient(ing);
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditing.next(i);
  }

}
