import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cirilobank';
  transfers: any[] = [];

  receiveTransfer($event) {
    const transfer = { ...$event, date: new Date() };
    this.transfers.push(transfer);
  }
}
