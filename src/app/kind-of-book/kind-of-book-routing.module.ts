import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KindOfBookPage } from './kind-of-book.page';


const routes: Routes = [
  {
    path: '',
    component: KindOfBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KindOfBookPageRoutingModule {}
