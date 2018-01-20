import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setPage = new EventEmitter<string>();

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
  }

  switchTo(s: string) {
    this.setPage.emit(s);
  }

  onStoreRecipes() {
    this.recipeService.storeRecipes().subscribe((response: HttpEvent<Object>) => {
      console.log(response);
    });
  }

  onFetch() {
    this.recipeService.getRecipesFromDB();
  }

  logoutFire() {
    this.authService.logoutFire();
  }

}
