import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';

/**
 * This is a module class that will be used to register all transfer resources.
 */
@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
