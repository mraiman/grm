import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-lesson10',
  templateUrl: './lesson10.component.html',
  styleUrls: ['./lesson10.component.css']
})
export class Lesson10Component implements OnInit {
  appName: Observable<any>;
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService, private authService: AuthService) { }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  ngOnInit() {
    this.authService.getToken();
    this.appName = this.serverService.getAppName();
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error));
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (response) => {
        console.log('onGet');
        console.log(response);
        let conv: { name: string, capacity: number, id: number }[] = [];
        conv = JSON.parse(response);
        for (const server of conv) {
          server['name'] = 'FETCHED_' + server['name'];
        }
        this.servers = conv;
      },
      (error) => console.log(error));
  }

}
