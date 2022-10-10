import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaResultadoComponent } from './encuesta-resultado.component';

describe('EncuestaResultadoComponent', () => {
  let component: EncuestaResultadoComponent;
  let fixture: ComponentFixture<EncuestaResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
