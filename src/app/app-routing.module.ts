import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'kind-of-book', pathMatch: 'full' },
  { path: 'kind-of-book', loadChildren: () => import('./kind-of-book/kind-of-book.module').then( m => m.KindOfBookPageModule)},
  {
    path: 'book-list/:idType',
    loadChildren: () => import('./book-list/book-list.module').then( m => m.BookListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
