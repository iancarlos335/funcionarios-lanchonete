import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceUpdateComponent } from './doce-update.component';

describe('DoceUpdateComponent', () => {
  let component: DoceUpdateComponent;
  let fixture: ComponentFixture<DoceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
