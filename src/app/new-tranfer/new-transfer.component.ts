import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']

})
export class NewTransferComponent {

    @Output() emitTransfer = new EventEmitter<any>();

    value: number;
    target: number;

    transfer() {
        console.log('Transfer Requested');

        const valueToEmit = { value: this.value, target: this.target };
        this.emitTransfer.emit(valueToEmit);

        this.resetFields();
    }

    resetFields() {
        this.value = 0;
        this.target = 0;
    }

}