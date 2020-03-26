import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { KindOfBookPage } from './kind-of-book.page';

describe('KindOfBookPage', () => {
  let component: KindOfBookPage;
  let fixture: ComponentFixture<KindOfBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindOfBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KindOfBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
