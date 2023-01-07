import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { FormsModule } from '@angular/forms';
/**
 * This is a module class that will be used to register all transfer resources.
 */
@NgModule({
  imports: [CommonModule, TransferRoutingModule, FormsModule],
  declarations: [TransferComponent],
})
export class TransferModule {}
