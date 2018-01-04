import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as Classes from '../../../../../classes/classes';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Classes.Recipe;
  @Output() recipeSelected = new EventEmitter<Classes.Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeSelected.emit(this.item);
  }

}
