import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/core/services/transfer.service';
import { Transfer } from '../../core/models/transfer.model';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  transfers: Transfer[] = [];
  error: string = '';
  alert: any;
  loading = false;
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    // Get all transfers
    this.getAll();
  }
  /**
   * Get all transfers
   */
  getAll() {
    this.loading = true;
    this.transferService.getAllTransfers().subscribe(
      (res) => {
        this.transfers = res;
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }
  /**
   * unblock transfer
   * @param transfer 
   */
  unblockTransfer(transfer: Transfer) {
    const reference: string = transfer.reference;
    console.log('Unblocking transfer ref : ' + reference);
  }

  /**
   * block transfer
   * @param transfer 
   */
  blockTransfer(transfer: Transfer) {
    const reference: string = transfer.reference;
    console.log('Blocking transfer ref : ' + reference);
  }

  //TODO: add alert
  showMessage(msg: string, type: string): void {
    window.scrollTo(0, 0);
    this.alert = {
      type,
      msg,
      timeout: 5000,
    };
  }

  createTrnsfer(){
    // TODO: add create transfer
  }
  
  onClosed() {
    this.alert = null;
  }
}
