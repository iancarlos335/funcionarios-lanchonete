import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgadoComponent } from './salgado.component';

describe('SalgadoComponent', () => {
  let component: SalgadoComponent;
  let fixture: ComponentFixture<SalgadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalgadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalgadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
