import { Component, OnInit, Input } from '@angular/core';
import * as Classes from '../../../../classes/classes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Classes.Recipe;

  constructor() { }

  ngOnInit() {
  }

}
