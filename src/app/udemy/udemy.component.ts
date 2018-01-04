import { Component, OnInit } from '@angular/core';
import * as Classes from '../classes/classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent implements OnInit {
  lesson1: Classes.UdemyLesson;
  lesson2: Classes.UdemyLesson;
  lesson3: Classes.UdemyLesson;
  lessons: Classes.UdemyLesson[] = [];

  constructor(public router: Router) {
    this.lesson1 = new Classes.UdemyLesson('TestServers', 1);
    this.lesson2 = new Classes.UdemyLesson('Course Project', 2);
    this.lesson3 = new Classes.UdemyLesson('Blueprints', 3);
    this.lessons.push(this.lesson1);
    this.lessons.push(this.lesson2);
    this.lessons.push(this.lesson3);
  }

  ngOnInit() {
  }

  getPath(i) {
    this.router.navigate(['udemy/' + i]);
  }

}
