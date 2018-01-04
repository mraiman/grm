import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../classes/classes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  singleRecipe: Classes.Recipe;
  displayDetails = false;

  constructor() { }

  ngOnInit() {
  }

  displayDetail(event: Classes.Recipe) {
    this.displayDetails = true;
    this.singleRecipe = new Classes.Recipe(event.name, event.description, event.imagePath);
  }

}
