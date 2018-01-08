import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../services/servers.service';

@Component({
  selector: 'app-rservers',
  templateUrl: './rservers.component.html',
  styleUrls: ['./rservers.component.css']
})
export class RserversComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
