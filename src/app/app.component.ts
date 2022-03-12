import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cirilobank';
  transfer: any;

  receiveTransfer($event) {
    console.log($event);
    this.transfer = $event;
  }
}
