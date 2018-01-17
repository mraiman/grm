import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post('https://udemy-ng-http-abae0.firebaseio.com/data.json', servers);
    return this.http.put('https://udemy-ng-http-abae0.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-ng-http-abae0.firebaseio.com/data').map((response: Response) => {
      return JSON.stringify(response);
    });
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-abae0.firebaseio.com/data/AppName.json');
  }

}
