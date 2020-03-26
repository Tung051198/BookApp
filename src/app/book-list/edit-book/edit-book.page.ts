import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../book.service';
import { NavController } from '@ionic/angular';
import { Books } from '../book.model';
import { Subscription } from 'rxjs';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit, OnDestroy {
  book: Books;
  form: FormGroup;
  booksSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private navCtrl: NavController) {

  }
  ngOnInit() {
  //   this.route.paramMap.subscribe(paramMap => {
  //     if (!paramMap.has('bookId')) {
  //       this.navCtrl.navigateBack('/book-list');
  //       return;
  //     }
  //     this.booksSub = this.booksService.getBook(paramMap.get('bookId')).subscribe(book => {
  //       this.book = book;
  //     });
  //     this.form = new FormGroup({
  //       Name: new FormControl(this.book.name, {
  //         updateOn: 'blur',
  //         validators: [Validators.required, Validators.maxLength(100)]
  //       }),
  //       Author: new FormControl(this.book.author, {
  //         updateOn: 'blur',
  //         validators: [Validators.required, Validators.maxLength(100)]
  //       }),
  //       Description: new FormControl(this.book.description, {
  //         updateOn: 'blur',
  //         validators: [Validators.required, Validators.maxLength(180)]
  //       }),
  //       Price: new FormControl(this.book.price, {
  //         updateOn: 'blur',
  //         validators: [Validators.required]
  //       })
  //     });
  //   });
  // }
  // ngOnDestroy() {
  //   if (this.booksSub) {
  //     this.booksSub.unsubscribe();
  //   }
  // }
  // onUpdateBook() {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   console.log(this.form);
  // }
  }
  ngOnDestroy(){}
}
