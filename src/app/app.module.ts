import { ShortenPipe } from './pipes/shorten.pipe';
import { ServerResolverService } from './services/server-resolver.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { Lesson4Component } from './udemy/lesson4/lesson4.component';
import { BasicHighlightDirective } from './udemy/lesson4/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './udemy/lesson4/better-highlight/better-highlight.directive';
import { UnlessDirective } from './udemy/lesson4/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { Lesson5Component } from './udemy/lesson5/lesson5.component';
import { AccountComponent } from './udemy/lesson5/account/account.component';
import { NewAccountComponent } from './udemy/lesson5/new-account/new-account.component';

import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { SwitchService } from './services/switch.service';
import { CountingService } from './services/counting.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { ServersService } from './services/servers.service';

import { ActiveUsersComponent } from './udemy/lesson5/active-users/active-users.component';
import { InactiveUsersComponent } from './udemy/lesson5/inactive-users/inactive-users.component';
import { Lesson6Component } from './udemy/lesson6/lesson6.component';
import { RhomeComponent } from './udemy/lesson6/rhome/rhome.component';
import { RserversComponent } from './udemy/lesson6/rservers/rservers.component';
import { RusersComponent } from './udemy/lesson6/rusers/rusers.component';
import { ReditServerComponent } from './udemy/lesson6/rservers/redit-server/redit-server.component';
import { RserverComponent } from './udemy/lesson6/rservers/rserver/rserver.component';
import { RuserComponent } from './udemy/lesson6/rusers/ruser/ruser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeDefaultComponent } from './udemy/lesson2/recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './udemy/lesson2/recipes/recipe-edit/recipe-edit.component';
import { Lesson7Component } from './udemy/lesson7/lesson7.component';
import { Lesson8Component } from './udemy/lesson8/lesson8.component';
import { Lesson9Component } from './udemy/lesson9/lesson9.component';
import { FilterPipe } from './pipes/filter.pipe';

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
    ServerElementComponent,
    Lesson4Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    Lesson5Component,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Lesson6Component,
    RhomeComponent,
    RserversComponent,
    RusersComponent,
    ReditServerComponent,
    RserverComponent,
    RuserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountsService, LoggingService, SwitchService, CountingService, RecipeService,
    ShoppingListService, ServersService, AuthService, AuthGuardService, CanDeactivateGuard, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
