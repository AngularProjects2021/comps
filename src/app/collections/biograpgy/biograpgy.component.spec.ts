import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiograpgyComponent } from './biograpgy.component';

describe('BiograpgyComponent', () => {
  let component: BiograpgyComponent;
  let fixture: ComponentFixture<BiograpgyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiograpgyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiograpgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
