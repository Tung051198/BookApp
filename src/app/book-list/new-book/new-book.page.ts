import { Component, OnInit } from '@angular/core';
import { BooksService } from '../book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.page.html',
  styleUrls: ['./new-book.page.scss'],
})
export class NewBookPage implements OnInit {
  form: FormGroup;
  public idAddLoai: string;
  type: any;
  constructor(private bookService: BooksService, private route: Router) {
    if (this.route.getCurrentNavigation().extras.state) {
      const state = this.route.getCurrentNavigation().extras.state;
      this.idAddLoai = state.idAddLoai ? JSON.parse(state.idAddLoai) : '';
      this.type = state.type ? state.type : '';
    }
  }

  ngOnInit() {
    console.log('đây à', this.idAddLoai);
    this.form = new FormGroup({
      IDBook: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      Name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      Author: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      Description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      Price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  onCreatBook() {
    if (!this.form.valid) {
      return;
    }
    this.bookService.addBook(this.idAddLoai,
      this.form.value.IDBook, this.form.value.Name, this.form.value.Author, this.form.value.Description,
      +this.form.value.Price, 'http://www.ybook.vn/uploads/books/full-img-17981-1461048424.jpg');
    this.form.reset();
    this.route.navigate(['/', 'book-list', this.idAddLoai]);
    console.log('add ID Type', this.idAddLoai);
  }
}
