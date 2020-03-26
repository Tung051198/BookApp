import { Injectable } from '@angular/core';
import { KindOfBooks } from './kind-of-books.model';

@Injectable({
  providedIn: 'root'
})
export class KindOfBooksService {
  // tslint:disable-next-line: variable-name
  private _kinfOfBooks: KindOfBooks[] = [
    new KindOfBooks(
      'L1',
      'Sách truyện',
      'Các tác phẩm tự sự kinh điển của văn học Việt Nam !',
      'https://cdn.tuoitre.vn/thumb_w/640/2019/4/24/sach-co-dung-hinh-1-4read-only-15561213340011869771655.jpg'
      ),
      new KindOfBooks(
        'L2',
        'Sách lập trình',
        'Các đầu sách dạy lập trình với nhiều loại ngôn ngữ lập trình khác nhau !',
        'https://www.topitworks.com/blogs/wp-content/uploads/2017/11/how-to-create-pip-package-1024x680-1024x680.jpg'
        ),
        new KindOfBooks(
          'L3',
          'Sách kinh tế',
          'Sách giúp phát triển kinh tế, tự chủ tài chính cá nhân !',
          'https://www.topitworks.com/blogs/wp-content/uploads/2017/11/how-to-create-pip-package-1024x680-1024x680.jpg'
          )
  ];
  get kindOfBooks() {
    return [...this._kinfOfBooks];
  }

  constructor() { }
}
