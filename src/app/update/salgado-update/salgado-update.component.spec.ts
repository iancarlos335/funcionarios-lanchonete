import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgadoUpdateComponent } from './salgado-update.component';

describe('SalgadoUpdateComponent', () => {
  let component: SalgadoUpdateComponent;
  let fixture: ComponentFixture<SalgadoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalgadoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalgadoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
