import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStockComponent } from './open-stock.component';

describe('OpenStockComponent', () => {
  let component: OpenStockComponent;
  let fixture: ComponentFixture<OpenStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
