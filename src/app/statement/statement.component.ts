import { Component, OnInit } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from './../services/transfer.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  transfers: any[];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.list().subscribe((transfers: Transfer[]) => {
      console.table(transfers);
      this.transfers = transfers;
    });
  }

}
