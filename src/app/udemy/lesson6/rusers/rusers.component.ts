import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rusers',
  templateUrl: './rusers.component.html',
  styleUrls: ['./rusers.component.css']
})
export class RusersComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
