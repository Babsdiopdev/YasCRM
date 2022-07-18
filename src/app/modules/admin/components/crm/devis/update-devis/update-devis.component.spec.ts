import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDevisComponent } from './update-devis.component';

describe('UpdateDevisComponent', () => {
  let component: UpdateDevisComponent;
  let fixture: ComponentFixture<UpdateDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
