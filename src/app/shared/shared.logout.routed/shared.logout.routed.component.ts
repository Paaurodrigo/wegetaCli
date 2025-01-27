import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-shared.logout.routed',
  templateUrl: './shared.logout.routed.component.html',
  styleUrls: ['./shared.logout.routed.component.css']
})

export class SharedLogoutRoutedComponent implements OnInit {

  constructor(
    private oSessionService: SessionService
  ) { }


  ngOnInit() {
  }

  cancelLogout() {
    
    window.location.href = '/';
  }

  confirmLogout() {
  
    this.oSessionService.deleteToken();
    this.oSessionService.logout();
    
    window.location.href = '/';
  }


}
