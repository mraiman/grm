import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../classes/classes';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Classes.Ingredient[] = [
    new Classes.Ingredient('Apples', 5),
    new Classes.Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ing: Classes.Ingredient) {
    this.ingredients.push(ing);
  }

}
