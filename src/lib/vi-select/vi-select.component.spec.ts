import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViSelectComponent } from './vi-select.component';

describe('ViSelectComponent', () => {
  let component: ViSelectComponent;
  let fixture: ComponentFixture<ViSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViSelectComponent]
    });
    fixture = TestBed.createComponent(ViSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
