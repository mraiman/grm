import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../../services/servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-rserver',
  templateUrl: './rserver.component.html',
  styleUrls: ['./rserver.component.css']
})
export class RserverComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.server = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    //   status: this.route.snapshot.params['status']
    // };
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  editServer() {
    this.router.navigate(['/udemy/6/servers/', this.server.id, 'edit'], { queryParamsHandling: 'preserve' });
  }

}
