import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundViewComponent } from './fund-view/fund-view.component';

const appRoutes: Routes =
[
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'funds',
    component: FundListComponent
  },
  {
    path: 'funds/:id',
    component: FundViewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
