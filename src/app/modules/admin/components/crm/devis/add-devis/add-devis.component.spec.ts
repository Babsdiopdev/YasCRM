import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevisComponent } from './add-devis.component';

describe('AddDevisComponent', () => {
  let component: AddDevisComponent;
  let fixture: ComponentFixture<AddDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
