import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: Transfer) {
    this.hidrate(transfer);

    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  hidrate(transfer: any) {
    transfer.date = new Date();
  }

}
