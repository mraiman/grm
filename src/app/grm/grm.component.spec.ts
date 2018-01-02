import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrmComponent } from './grm.component';

describe('GrmComponent', () => {
  let component: GrmComponent;
  let fixture: ComponentFixture<GrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
