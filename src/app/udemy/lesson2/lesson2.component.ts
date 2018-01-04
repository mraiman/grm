import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  setRecipeView = false;

  constructor() { }

  ngOnInit() {
  }

  setView(s: string) {
    if (s === 'recipes') {
      this.setRecipeView = true;
    }
    if (s === 'shoppingList') {
      this.setRecipeView = false;
    }
  }

}
