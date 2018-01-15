import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-lesson10',
  templateUrl: './lesson10.component.html',
  styleUrls: ['./lesson10.component.css']
})
export class Lesson10Component implements OnInit {
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

  constructor(private serverService: ServerService) { }

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
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe((response) => {
      console.log(response);
    },
      (error) => console.log(error));
  }

}
