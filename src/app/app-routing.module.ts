import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UdemyComponent } from './udemy/udemy.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { GrmComponent } from './grm/grm.component';

import { Lesson1Component } from './udemy/lesson1/lesson1.component';
import { Lesson2Component } from './udemy/lesson2/lesson2.component';

const routes: Routes = [
  { path: '', redirectTo: '/udemy', pathMatch: 'full' },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'grm', component: GrmComponent },
  { path: 'udemy',
    component: UdemyComponent,
    children: [
      {
      path: '1',
      component: Lesson1Component
      },
      {
        path: '2',
        component: Lesson2Component
        }
    ] }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }