import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../../services/servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-redit-server',
  templateUrl: './redit-server.component.html',
  styleUrls: ['./redit-server.component.css']
})
export class ReditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
