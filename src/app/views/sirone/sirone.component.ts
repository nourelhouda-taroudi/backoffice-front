import { Component, OnInit } from '@angular/core';
import { SironeService } from '../../core/services/sirone.service';
import { Sirone } from '../../core/models/sirone.model';
import { TransferService } from 'src/app/core/services/transfer.service';
import { Transfer } from 'src/app/core/models';

@Component({
  selector: 'app-sirone',
  templateUrl: './sirone.component.html',
  styleUrls: ['./sirone.component.css'],
})
export class SironeComponent implements OnInit {
  loading = false;
  transfers: Transfer[] = [];

  constructor(private readonly transferService: TransferService) {}

  ngOnInit(): void {
    this.getAllBlocked();
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
        this.getAllBlocked(); // refresh
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

  /**
   * Get sirone list
   */
  async getAllBlocked() {
    this.loading = true;
    this.transferService.getAllBlockedTransfers().then(
     async (res) => {
        this.transfers = await res.json();
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }
}
