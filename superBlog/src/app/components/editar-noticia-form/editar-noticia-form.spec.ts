import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNoticiaForm } from './editar-noticia-form';

describe('EditarNoticiaForm', () => {
  let component: EditarNoticiaForm;
  let fixture: ComponentFixture<EditarNoticiaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarNoticiaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarNoticiaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
