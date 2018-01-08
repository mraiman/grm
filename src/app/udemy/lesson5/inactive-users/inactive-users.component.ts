import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private switchService: SwitchService) { }

  setToActive(i: number) {
    this.switchService.onSetToActive(i);
    this.users = this.switchService.inactiveUsers;
  }

  ngOnInit() {
    this.users = this.switchService.inactiveUsers;
  }

}
