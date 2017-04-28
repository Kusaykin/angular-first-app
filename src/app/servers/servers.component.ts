import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
    <hr>
    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
