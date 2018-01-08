import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private switchService: SwitchService) { }

  ngOnInit() {
    this.users = this.switchService.activeUsers;
  }

  setToInactive(i: number) {
    this.switchService.onSetToInactive(i);
    this.users = this.switchService.activeUsers;
  }

}

