import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rhome',
  templateUrl: './rhome.component.html',
  styleUrls: ['./rhome.component.css']
})
export class RhomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate(['servers', id, 'edit'], { relativeTo: this.route, queryParams: { allowEdit: '1' }, fragment: 'loading' });

  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
