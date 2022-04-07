import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularCompComponent } from './nebular-comp.component';

describe('NebularCompComponent', () => {
  let component: NebularCompComponent;
  let fixture: ComponentFixture<NebularCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
