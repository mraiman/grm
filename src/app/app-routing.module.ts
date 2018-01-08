import { ServerResolverService } from './services/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UdemyComponent } from './udemy/udemy.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { GrmComponent } from './grm/grm.component';

import { Lesson1Component } from './udemy/lesson1/lesson1.component';
import { Lesson2Component } from './udemy/lesson2/lesson2.component';
import { Lesson3Component } from './udemy/lesson3/lesson3.component';
import { Lesson4Component } from './udemy/lesson4/lesson4.component';
import { Lesson5Component } from './udemy/lesson5/lesson5.component';
import { Lesson6Component } from './udemy/lesson6/lesson6.component';

import { RusersComponent } from './udemy/lesson6/rusers/rusers.component';
import { RhomeComponent } from './udemy/lesson6/rhome/rhome.component';
import { RserversComponent } from './udemy/lesson6/rservers/rservers.component';
import { RuserComponent } from './udemy/lesson6/rusers/ruser/ruser.component';
import { ReditServerComponent } from './udemy/lesson6/rservers/redit-server/redit-server.component';
import { RserverComponent } from './udemy/lesson6/rservers/rserver/rserver.component';

const routes: Routes = [
  { path: '', redirectTo: '/udemy', pathMatch: 'full' },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'grm', component: GrmComponent },
  {
    path: 'udemy',
    component: UdemyComponent,
    children: [
      {
        path: '1',
        component: Lesson1Component
      },
      {
        path: '2',
        component: Lesson2Component
      },
      {
        path: '3',
        component: Lesson3Component
      },
      {
        path: '4',
        component: Lesson4Component
      },
      {
        path: '5',
        component: Lesson5Component
      },
      {
        path: '6',
        component: Lesson6Component,
        children: [
          {
            path: 'users',
            component: RusersComponent,
            children: [
              {
                path: ':id/:name',
                component: RuserComponent
              }
            ]
          },
          {
            path: '',
            component: RhomeComponent
          },
          {
            path: 'servers',
            // canActivate: [AuthGuardService],
            canActivateChild: [AuthGuardService],
            component: RserversComponent,
            children: [
              {
                path: ':id/edit',
                component: ReditServerComponent,
                canDeactivate: [CanDeactivateGuard]
              },
              {
                path: ':id',
                component: RserverComponent,
                resolve: { server: ServerResolverService }
              }
            ]
          }
        ]
      }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  exports: [RouterModule],
  // imports: [RouterModule.forRoot(routes, { useHash: true })]
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
