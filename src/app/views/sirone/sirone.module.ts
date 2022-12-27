import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SironeRoutingModule } from './sirone-routing.module';
import { SironeComponent } from './sirone.component';


@NgModule({
  declarations: [
    SironeComponent
  ],
  imports: [
    CommonModule,
    SironeRoutingModule
  ]
})
export class SironeModule { }
