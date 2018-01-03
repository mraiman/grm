import { Component, OnInit } from '@angular/core';
import * as Classes from '../../../../classes/classes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Classes.Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Classes.Recipe('A Test Recipe', 'test desc', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'), new Classes.Recipe('A Test Recipe', 'test desc', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
