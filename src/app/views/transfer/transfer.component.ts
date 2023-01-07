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
  errors={
    raison:'',
  }

  alert: any;
  loading = false;
  raison: string = '';
  showReturnModal = true;
  transferToReturn!: Transfer;
  transfers: Transfer[] = [
    {
      id: 1,
      reference: 'AE99922',
      amount: 1000,
      agentId: 2,
      status: TransferStatus.TO_SERVE,
      beneficiary: 4,
      transferAmount: 10000,
      backOfficeId: 5,
      clientId: 6,
      operationAmount: 1010,
      enabled: true,
      notified: true,
      fees: {
        beneficiaryFees: 0,
        clientFees: 10,
        feesType: 'APP',
        id: 1,
      },
      type: '',
      createdAt: new Date(),
      unblockedAt: new Date(),
    },
  ];
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
        // this.transfers = res; To decommanted after
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

  resetErrors(){
    this.errors.raison='';
  }

  showReturn(transfer: Transfer) {
    this.transferToReturn = transfer;
    this.showReturnModal = true;
  }

  returnTransfer() {
    console.log('Return transfer');
    if (this.raison == '') {
      this.errors.raison='Raison is required.'
    }
    return this.transferService
      .returnTransfer(this.transferToReturn.reference, this.raison)
      .subscribe(
        (res) => {
          console.log(res);
          this.showReturnModal=false;
        },
        (err) => {
          console.log(err);
          this.showReturnModal=false;
        }
      );
  }

  onClosed() {
    this.alert = null;
  }
}
