import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRVComponent } from './add-rv.component';

describe('AddRVComponent', () => {
  let component: AddRVComponent;
  let fixture: ComponentFixture<AddRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
