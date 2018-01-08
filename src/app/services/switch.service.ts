import { Injectable } from '@angular/core';
import { CountingService } from './counting.service';

@Injectable()
export class SwitchService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countingService: CountingService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countingService.count++;
    console.log(this.countingService.count);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countingService.count++;
    console.log(this.countingService.count);
  }

}
