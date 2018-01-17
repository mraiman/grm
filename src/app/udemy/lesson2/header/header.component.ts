import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setPage = new EventEmitter<string>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  switchTo(s: string) {
    this.setPage.emit(s);
  }

  onStoreRecipes() {
    this.recipeService.storeRecipes().subscribe(response => {
      console.log(response);
    });
  }

  onFetch() {
    this.recipeService.getRecipesFromDB();
  }

}
