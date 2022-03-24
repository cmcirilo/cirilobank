import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Transfer } from "./../models/transfer.model";
import { TransferService } from "./../services/transfer.service";

@Component({
    selector: "app-new-transfer",
    templateUrl: "./new-transfer.component.html",
    styleUrls: ["./new-transfer.component.scss"],
})
export class NewTransferComponent {
    value: number;
    target: number;

    constructor(private transferService: TransferService, private router: Router) { }

    transfer() {
        console.log("Transfer Requested");

        const transfer: Transfer = { value: this.value, target: this.target };

        this.transferService.add(transfer).subscribe(
            (transfer) => {
                console.log(transfer);
                this.router.navigateByUrl('statement');
            },
            (error) => console.error(error)
        );
    }
}
