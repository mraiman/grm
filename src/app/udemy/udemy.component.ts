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
  lesson4: Classes.UdemyLesson;
  lesson5: Classes.UdemyLesson;
  lesson6: Classes.UdemyLesson;
  lesson7: Classes.UdemyLesson;
  lesson8: Classes.UdemyLesson;
  lesson9: Classes.UdemyLesson;
  lesson10: Classes.UdemyLesson;
  lessons: Classes.UdemyLesson[] = [];

  constructor(public router: Router) {
    this.lesson1 = new Classes.UdemyLesson('TestServers', 1);
    this.lesson2 = new Classes.UdemyLesson('Course Project', 2);
    this.lesson3 = new Classes.UdemyLesson('Blueprints', 3);
    this.lesson4 = new Classes.UdemyLesson('Directives', 4);
    this.lesson5 = new Classes.UdemyLesson('Services', 5);
    this.lesson6 = new Classes.UdemyLesson('Routing', 6);
    this.lesson7 = new Classes.UdemyLesson('Forms1', 7);
    this.lesson8 = new Classes.UdemyLesson('Forms2', 8);
    this.lesson9 = new Classes.UdemyLesson('Pipes', 9);
    this.lesson10 = new Classes.UdemyLesson('Http', 10);
    this.lessons.push(this.lesson1);
    this.lessons.push(this.lesson2);
    this.lessons.push(this.lesson3);
    this.lessons.push(this.lesson4);
    this.lessons.push(this.lesson5);
    this.lessons.push(this.lesson6);
    this.lessons.push(this.lesson7);
    this.lessons.push(this.lesson8);
    this.lessons.push(this.lesson9);
    this.lessons.push(this.lesson10);
  }

  ngOnInit() {
  }

  getPath(i) {
    this.router.navigate(['udemy/' + i]);
  }

}
