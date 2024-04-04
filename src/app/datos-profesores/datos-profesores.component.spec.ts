import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProfesoresComponent } from './datos-profesores.component';

describe('DatosProfesoresComponent', () => {
  let component: DatosProfesoresComponent;
  let fixture: ComponentFixture<DatosProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosProfesoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
