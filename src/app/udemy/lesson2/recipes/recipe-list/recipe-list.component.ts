import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as Classes from '../../../../classes/classes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() passRecipe = new EventEmitter<Classes.Recipe>();
  recipes: Classes.Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Classes.Recipe('A Test Recipe', 'test desc', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'), new Classes.Recipe('Good Recipe', 'my text', 'https://eda.sakh.com/resources/images/site/cuisines-2.0/sushi.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  pass(event: Classes.Recipe) {
    this.passRecipe.emit(event);
  }

}
