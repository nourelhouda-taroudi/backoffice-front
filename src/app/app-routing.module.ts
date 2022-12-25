import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './views/containers';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
  },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./views/transfer/transfer.module').then((m) => m.TransferModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
