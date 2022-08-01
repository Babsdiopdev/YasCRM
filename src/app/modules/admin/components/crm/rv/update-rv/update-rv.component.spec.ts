import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRvComponent } from './update-rv.component';

describe('UpdateRvComponent', () => {
  let component: UpdateRvComponent;
  let fixture: ComponentFixture<UpdateRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
