import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as Classes from '../../../../../classes/classes';
import { RecipeService } from '../../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Classes.Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.item);
  }

}
