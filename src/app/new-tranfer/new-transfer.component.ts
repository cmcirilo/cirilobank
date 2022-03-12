import { Component } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']

})
export class NewTransferComponent {

    value: number;
    target: number;

    transfer() {
        console.log('Transfer Requested');
        console.log('Value ', this.value);
        console.log('Target ', this.target);
    }

}