import { Component, OnInit, OnDestroy } from '@angular/core';
import { Books } from '../book.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BooksService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.page.html',
  styleUrls: ['./detail-book.page.scss'],
})
export class DetailBookPage implements OnInit, OnDestroy {
  book: Books;
  private booksSub: Subscription;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private booksService: BooksService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('idBook')) {
        this.navCtrl.navigateBack('/book-list');
        return;
      }
      this.booksSub = this.booksService.getBook(paraMap.get('idBook')).subscribe(book => {
        this.book = book;
      });
    });
  }
  ngOnDestroy() {
    if (this.booksSub) {
      this.booksSub.unsubscribe();
    }
  }
}
