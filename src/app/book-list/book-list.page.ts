import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from './book.model';
import { IonItemSliding, NavController } from '@ionic/angular';
import { KindOfBookPage } from '../kind-of-book/kind-of-book.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit, OnDestroy {
  loadedBooks: Books[];
  private booksSub: Subscription;
  bookListById: Books[];
  public idLoai: string;
  public idType: string;
  public idEditBook: string;
  type: any;
  book: any;
  constructor(
    private booksService: BooksService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private navCtrl: NavController) {
    if (this.route.getCurrentNavigation().extras.state) {
      const state = this.route.getCurrentNavigation().extras.state;
      this.idType = state.idType ? JSON.parse(state.idType) : '';
      this.type = state.type ? state.type : '';
    }
  }
  ngOnInit() {
    console.log('id Loại là:', this.idType);
    this.idLoai = this.idType;
    // this.loadedBooks = this.booksService.books;
    this.booksSub = this.booksService.books.subscribe(books => {
      this.loadedBooks = books;
    });
    this.bookListById = this.loadedBooks.filter(book => book.idType === this.idLoai);
  }
  ngOnDestroy() {
    if (this.booksSub) {
      this.booksSub.unsubscribe();
    }
  }
  onAddBook(idAddLoai: string) {
    console.log('hiii', idAddLoai);
    this.route.navigate(['/', 'book-list', idAddLoai, 'new-book'], {
      state: {
        idAddLoai: JSON.stringify(idAddLoai),
        type: 'reader'
      }
    });
  }

  onEdit(bookId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.route.navigate(['/', 'book-list', this.idType, 'edit', bookId]);
    console.log('editting books has id is: ' + bookId);
     this.idEditBook = bookId;
  }

  onDelete(bookId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('delete books has id is: ' + bookId);
  }
  // onNewBook()
  // {
  //   this.route.navigate(['/', 'create-book']);
  // }
}
