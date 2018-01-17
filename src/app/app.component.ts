import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyC2IER6ec5KOoR37MH96LsfhMtleGtnpoY',
      authDomain: 'udemy-ng-http-abae0.firebaseapp.com'
    });
  }

}
