import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { UdemyComponent } from './udemy/udemy.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { GrmComponent } from './grm/grm.component';
import { Lesson1Component } from './udemy/lesson1/lesson1.component';
import { Lesson2Component } from './udemy/lesson2/lesson2.component';
import { ServerComponent } from './udemy/lesson1/server/server.component';
import { ServersComponent } from './udemy/lesson1/servers/servers.component';
import { HeaderComponent } from './udemy/lesson2/header/header.component';
import { RecipesComponent } from './udemy/lesson2/recipes/recipes.component';
import { RecipeListComponent } from './udemy/lesson2/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './udemy/lesson2/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './udemy/lesson2/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './udemy/lesson2/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './udemy/lesson2/shopping-list/shopping-edit/shopping-edit.component';
import { Lesson3Component } from './udemy/lesson3/lesson3.component';
import { CockpitComponent } from './udemy/lesson3/cockpit/cockpit.component';
import { ServerElementComponent } from './udemy/lesson3/server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UdemyComponent,
    SandboxComponent,
    GrmComponent,
    Lesson1Component,
    Lesson2Component,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Lesson3Component,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
