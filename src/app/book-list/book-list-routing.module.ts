import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListPage } from './book-list.page';

const routes: Routes = [
  {
    path: '',
    component: BookListPage
  },
  {
    path: 'new-book',
    loadChildren: () => import('./new-book/new-book.module').then( m => m.NewBookPageModule)
  },
  {
    path: 'edit/:idBook',
    loadChildren: () => import('./edit-book/edit-book.module').then( m => m.EditBookPageModule)
  },
  {
    path: ':idBook',
    loadChildren: () => import('./detail-book/detail-book.module').then( m => m.DetailBookPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookListPageRoutingModule {}
