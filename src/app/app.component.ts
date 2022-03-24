import { Component } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cirilobank';
  transfers: any[] = [];

  constructor(private transferService: TransferService) { }

  receiveTransfer($event) {
    this.transferService.add($event);
  }
}
