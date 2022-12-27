import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SironeComponent } from './sirone.component';

const routes: Routes = [{ path: '', component: SironeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SironeRoutingModule { }
