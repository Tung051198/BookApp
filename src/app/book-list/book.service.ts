import { Injectable } from '@angular/core';
import { Books } from './book.model';
import { BehaviorSubject } from 'rxjs';

import { take, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // tslint:disable-next-line: variable-name
  private _book = new BehaviorSubject<Books[]>([
    new Books(
      'L1',
      'B1',
      'Truyện Kiều',
      'Các tác phẩm tự sự kinh điển của văn học Việt Nam !',
      'Nguyễn Du',
      40000,
      'https://cdn.tuoitre.vn/thumb_w/640/2019/4/24/sach-co-dung-hinh-1-4read-only-15561213340011869771655.jpg'
    ),
    new Books(
      'L1',
      'B2',
      'Chí Phèo',
      'Các tác phẩm tự sự kinh điển của văn học Việt Nam !',
      'Nam Cao',
      30000,
      'https://www.topitworks.com/blogs/wp-content/uploads/2017/11/how-to-create-pip-package-1024x680-1024x680.jpg'
    ),
    new Books(
      'L2',
      'B3',
      'Những ngôi sao xa xôi',
      'Các tác phẩm tự sự kinh điển của văn học Việt Nam !',
      'Nguyễn Du',
      25000,
      'https://www.topitworks.com/blogs/wp-content/uploads/2017/11/how-to-create-pip-package-1024x680-1024x680.jpg'
    ),
    new Books(
      'L2',
      'B4',
      'Lập trình C#',
      'Java: Lập trình hướng đối tượng',
      'Jack',
      55000,
      'https://th.bing.com/th/id/OIP.6dZBSSxPVBwX_6bUPzdY8AHaFu?w=254&h=196&c=7&o=5&dpr=1.25&pid=1.7'
    ),
    new Books(
      'L2',
      'B3',
      'Phân tích thiết kế thuật toán',
      'Hướng phân tích thiết kế thuật toán',
      'Johan',
      35000,
      'http://www.ybook.vn/uploads/books/full-img-17981-1461048424.jpg'
    ),
    new Books(
      'L1',
      'B6',
      'Lập trình android',
      'Lập trình android cơ bản',
      'Mush',
      25000,
      'http://www.ybook.vn/uploads/books/full-img-17981-1461048424.jpg'
    ),
    new Books(
      'L3',
      'B3',
      'Kinh tế học',
      'Phát triển kinh tế',
      'Ngọc Hải ',
      25000,
      'https://th.bing.com/th/id/OIP.jzM_meYWo2-3s-TDdoiecgHaLb?w=194&h=299&c=7&o=5&dpr=1.25&pid=1.7'
    )
    ,
    new Books(
      'L2',
      'B4',
      'Lập trình hướng đối tượng',
      'Java: Lập trình hướng đối tượng',
      'Jack',
      55000,
      'https://th.bing.com/th/id/OIP.6dZBSSxPVBwX_6bUPzdY8AHaFu?w=254&h=196&c=7&o=5&dpr=1.25&pid=1.7'
    ),
    new Books(
      'L2',
      'B3',
      'Phân tích thiết hướng đối tượng',
      'Hướng phân tích thiết kế thuật toán',
      'Johan',
      35000,
      'http://www.ybook.vn/uploads/books/full-img-17981-1461048424.jpg'
    ),
    new Books(
      'L1',
      'B6',
      'Lập trình android',
      'Lập trình android cơ bản',
      'Mush',
      25000,
      'http://www.ybook.vn/uploads/books/full-img-17981-1461048424.jpg'
    ),
    new Books(
      'L3',
      'B3',
      'Phát triển kinh tế bản thân',
      'Phát triển kinh tế',
      'Ngọc Hải ',
      25000,
      'https://th.bing.com/th/id/OIP.jzM_meYWo2-3s-TDdoiecgHaLb?w=194&h=299&c=7&o=5&dpr=1.25&pid=1.7'
    )
  ]);
  get books() {
    return this._book.asObservable();
  }
  constructor() { }

  getBook(id: string) {
    return this.books.pipe(take(1), map(books => {
      return { ...books.find(p => p.idBook === id) };
    }));
  }
  getIdType(idLoai: string) {
    return this.books.pipe(take(1), map(books => {
      return { ...books.find(p => p.idType === idLoai) };
    }));
    // return { ...this._book.find(p => p.idType === idLoai) };
  }
  addBook(idLoai: string, idBook: string, name: string, description: string, author: string, price: number, imageUrl: string) {
    const newBook = new Books(
      idLoai, idBook, name, description, author, price, imageUrl);
    this.books.pipe(take(1)).subscribe(books => {
      this._book.next(books.concat(newBook));
    });
  }
}
