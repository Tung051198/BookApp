import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KindOfBookPageRoutingModule } from './kind-of-book-routing.module';
import { KindOfBookPage } from './kind-of-book.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KindOfBookPageRoutingModule
  ],
  declarations: [KindOfBookPage]
})
export class KindOfBookPageModule {}
