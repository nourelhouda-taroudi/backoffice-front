import { Component, OnInit } from '@angular/core';
import { Beneficiary } from 'src/app/core/models/beneficiary.model';
import { BeneficiaryService } from '../../core/services/beneficiary.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css'],
})
export class BeneficiaryComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  loading = false;

  constructor(private readonly beneficiaryService: BeneficiaryService) {}

  ngOnInit(): void {
    this.getAllBeneficiaries();
  }

  getAllBeneficiaries() {
    this.loading = true;
    this.beneficiaryService.getAllBeneficiries().subscribe(
      (res: Beneficiary[]) => {
        this.beneficiaries = res;
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  blockBeneficiary(beneficiary: Beneficiary) {
    const beneficiaryId = beneficiary.id;
    if (!beneficiaryId) return;
    console.log('Block beneficiary Id : ' + beneficiaryId);
    // Uncomment this bloc when back ready
    // this.beneficiaryService.blockBeneficiary(beneficiaryId).subscribe(((res)=>{
    //   console.log(res);

    // }),err=>{
    //   console.error(err);

    // })
  }
  unblockBeneficiary(beneficiary: Beneficiary) {
    const beneficiaryId = beneficiary.id;
    if (!beneficiaryId) return;
    console.log('UnBlock beneficiary Id : ' + beneficiaryId);
    // Uncomment this bloc when back ready
    // this.beneficiaryService.blockBeneficiary(beneficiaryId).subscribe(((res)=>{
    //   console.log(res);

    // }),err=>{
    //   console.error(err);

    // })
  }
}
