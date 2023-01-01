import { Component, OnInit } from '@angular/core';
import { SironeService } from '../../core/services/sirone.service';
import { Sirone } from '../../core/models/sirone.model';

@Component({
  selector: 'app-sirone',
  templateUrl: './sirone.component.html',
  styleUrls: ['./sirone.component.css'],
})
export class SironeComponent implements OnInit {
  loading = false;
  sironeList: Sirone[] = [];
  constructor(private readonly sironeService: SironeService) {}

  ngOnInit(): void {
    this.getSironeList();
  }

  /**
   * Get sirone list
   */
  async getSironeList() {
    this.loading = true;
    this.sironeService.getSironeList().subscribe(
      (res: Sirone[]) => {
        this.loading = false;
        this.sironeList = res;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      }
    );
  }

  /**
   * remove from SIRONE
   */
  unblock(sirone: Sirone) {
    const sironeId = sirone.id;
    if (!sironeId) return;
    console.log('Remove from sirone ' + sironeId);
    // Uncomment this bloc when back ready
    // this.sironeService.unblockBeneficiary(sironeId).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // );
  }
}
