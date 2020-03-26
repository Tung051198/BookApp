import { Component, OnInit } from '@angular/core';
import { KindOfBooks } from './kind-of-books.model';
import { KindOfBooksService } from './kind-of-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kind-of-book',
  templateUrl: './kind-of-book.page.html',
  styleUrls: ['./kind-of-book.page.scss'],
})
export class KindOfBookPage implements OnInit {
  loadedKindOfBooks: KindOfBooks[];
  idKindOfBook: string;
  constructor(private kindOfBooksService: KindOfBooksService, private route: Router) { }

  ngOnInit() {
    this.loadedKindOfBooks = this.kindOfBooksService.kindOfBooks;
  }
  toListBook(idType: string) {
    this.route.navigate(['/', 'book-list', idType], {
      state: {
        idType: JSON.stringify(idType),
      type: 'reader'
      }
      });
    this.idKindOfBook = idType;
    console.log(this.idKindOfBook);
  }
}
