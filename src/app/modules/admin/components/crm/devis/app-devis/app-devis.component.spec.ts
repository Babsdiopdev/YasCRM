import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevisComponent } from './app-devis.component';

describe('AppDevisComponent', () => {
  let component: AppDevisComponent;
  let fixture: ComponentFixture<AppDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
