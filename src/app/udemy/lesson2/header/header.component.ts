import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  switchTo(s: string) {
    this.setPage.emit(s);
  }

}
