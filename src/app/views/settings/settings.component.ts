import { Component, OnInit } from '@angular/core';
import { TransferParamName } from '../../core/enums';
import { TransferParam } from '../../core/models';
import { TransferParamService } from '../../core/services/transfer-param.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  transferParams: TransferParam[] = [];
  maxTransfer: TransferParam | null = {
    id: 1,
    name: 'MAX_TRANSFER',
    value: 2000,
  };

  feesApp: TransferParam | null = {
    id: 2,
    name: 'FEES_AGENCY',
    value: 20,
  };
  feesAgency: TransferParam | null = {
    id: 3,
    name: 'FEES_APP',
    value: 15,
  };
  error!: string;

  constructor(private transferParamService: TransferParamService) {}

  ngOnInit(): void {
    this.getAllParams();
  }

  /**
   * Get all parms
   */
  getAllParams() {
    this.transferParamService
      .getAllParams()
      .then((data: TransferParam[]) => {
        this.transferParams = data;
        console.log({ data });
        this.setParams();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Set transfers params
   */
  setParams() {
    this.maxTransfer =
      this.transferParams.find(
        (p) => p.name == TransferParamName[TransferParamName.MAX_TRANSFER]
      ) || null;
    this.feesAgency =
      this.transferParams.find(
        (p) => p.name == TransferParamName[TransferParamName.FEES_AGENCY]
      ) || null;
    this.feesApp =
      this.transferParams.find(
        (p) => p.name == TransferParamName[TransferParamName.FEES_APP]
      ) || null;
    console.log(this.maxTransfer, this.feesAgency, this.feesApp);
  }

  /**
   * Update transfers param
   * @param transferParam
   */
  updateParam(transferParam: TransferParam) {
    console.log('Update transfer param');
    if (
      transferParam.name !==
        TransferParamName[TransferParamName.MAX_TRANSFER] &&
      !this.checkValue(transferParam)
    ) {
      return;
    }
    this.transferParamService.updateParam(transferParam).then(
      (res) => {
        console.log('Param updated');
      },
      (err) => {
        console.error({ err });
      }
    );
  }

  /**
   * Check if transfer value between 0 and 100
   * @param param
   * @returns boolean
   */
  checkValue(param: TransferParam) {
    if (param.value < 0 || param.value > 100) {
      this.error = 'Oopps ,Fees value must be betweeen 0% and 100% :(';
      return false;
    }
    return true;
  }
}
