import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  storeServers(servers: any[]) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post('https://udemy-ng-http-abae0.firebaseio.com/data.json', servers);
    return this.http.put('https://udemy-ng-http-abae0.firebaseio.com/data.json?auth=' + token, servers);
  }

  getServers() {
    const token = this.authService.getToken();
    return this.http.get('https://udemy-ng-http-abae0.firebaseio.com/data?auth=' + token).map((response) => {
      console.log(response);
      return JSON.stringify(response);
    });
  }

  getAppName() {
    console.log('getAppName');
    const token = this.authService.getToken();
    return this.http.get('https://udemy-ng-http-abae0.firebaseio.com/data/AppName.json?auth=' + token);
  }

}
