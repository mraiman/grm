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
    ServersComponent
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
