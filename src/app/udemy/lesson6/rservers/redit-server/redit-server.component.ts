import { CanDeactivateGuard, CanComponentDeactivate } from './../../../../services/can-deactivate-guard.service';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../../../../services/servers.service';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-redit-server',
  templateUrl: './redit-server.component.html',
  styleUrls: ['./redit-server.component.css']
})
export class ReditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );
    const id = +this.route.snapshot.params['id'];
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(id);
    console.log(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    } else {
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
        return confirm('Do you want to discard the changes?');
      } else {
        return true;
      }
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
