import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaUpdateComponent } from './bebida-update.component';

describe('BebidaUpdateComponent', () => {
  let component: BebidaUpdateComponent;
  let fixture: ComponentFixture<BebidaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
