import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css'],
  providers: [AccountsService]
})
export class Lesson5Component implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
