import { Component, OnInit } from '@angular/core';
import { TransferStatus } from 'src/app/core/enums';
import { TransferService } from 'src/app/core/services/transfer.service';
import { Transfer } from '../../core/models/transfer.model';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  // transfers: Transfer[] = [];
  error: string = '';
  errors = {
    raison: '',
  };

  alert: any;
  loading = false;
  raison: string = '';
  showReturnModal = true;
  transferToReturn!: Transfer;
  transfers: Transfer[] = [];
  reference = '';
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    // Get all transfers
    this.getAll();
  }
  /**
   * Get all transfers
   */
  async getAll() {
    this.loading = true;
    const res = await this.transferService.getAllTransfers();
    if (res.status === 200) {
      this.transfers = await res.json();
    }
  }

  /**
   * block transfer
   * @param transfer
   */
  async blockTransfer(transfer: Transfer) {
    const reference: string = transfer._id;
    console.log('Blocking transfer ref : ' + reference);
    const res = await this.transferService.blockTransfer(reference);
    if (res.status === 200) {
      this.getAll();
    }
  }

  /**
   * unblock transfer
   * @param transfer
   */
  unblockTransfer(transfer: Transfer) {
    const reference: string = transfer._id;
    console.log('Unblocking transfer ref : ' + reference);
    this.transferService
      .unblockTransfer(reference)
      .then((res) => {
        this.getAll(); // refresh
      })
      .catch((err) => {
        console.log('Error ', err);
      });
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

  resetErrors() {
    this.errors.raison = '';
  }

  showReturn(transfer: Transfer) {
    this.transferToReturn = transfer;
    this.showReturnModal = true;
  }

  returnTransfer() {
    console.log('Return transfer');
    if (this.raison == '') {
      this.errors.raison = 'Raison is required.';
    }
    return this.transferService
      .returnTransfer(this.transferToReturn._id, this.raison, '1234')
      .then((res) => {
        console.log(res);
        this.showReturnModal = false;
        this.getAll();
      })
      .catch((err) => {
        console.log(err);
        this.showReturnModal = false;
      });
  }

  search() {
    if (this.reference == '') this.getAll();
    else
      this.transferService
        .getTransferByReference(this.reference)
        .then(async (res) => {
          if (res.status === 200) {
            this.transfers = [await res.json()];
          } else {
            this.transfers = [];
          }
        })
        .catch(() => (this.transfers = []));
  }

  onClosed() {
    this.alert = null;
  }
}
