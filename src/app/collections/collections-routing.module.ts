import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiograpgyComponent } from './biograpgy/biograpgy.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path:'',
    component:CollectionsHomeComponent,
    // children means sub compnent display in this componenet using router-outlet
    children : [
    {
      path:'',component:BiograpgyComponent
    },
    {
      path:'companies',component:CompaniesComponent
    },
    {
      path:'partners',component:PartnersComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
