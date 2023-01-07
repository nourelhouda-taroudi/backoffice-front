import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './views/containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transfers',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'transfers',
        loadChildren: () =>
          import('./views/transfer/transfer.module').then(
            (m) => m.TransferModule
          ),
      },
      {
        path: 'sirone',
        loadChildren: () =>
          import('./views/sirone/sirone.module').then((m) => m.SironeModule),
      },
      {
        path: 'beneficiaries',
        loadChildren: () =>
          import('./views/beneficiary/beneficiary.module').then(
            (m) => m.BeneficiaryModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./views/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
