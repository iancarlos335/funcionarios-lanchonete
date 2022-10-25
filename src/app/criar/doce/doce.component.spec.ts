import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceComponent } from './doce.component';

describe('DoceComponent', () => {
  let component: DoceComponent;
  let fixture: ComponentFixture<DoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
