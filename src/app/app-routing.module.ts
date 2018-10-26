import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'test',component:TestComponent},
  {path:'**',component:HomeComponent}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
