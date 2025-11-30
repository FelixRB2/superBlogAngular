import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNoticiaForm } from './nueva-noticia-form';

describe('NuevaNoticiaForm', () => {
  let component: NuevaNoticiaForm;
  let fixture: ComponentFixture<NuevaNoticiaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaNoticiaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaNoticiaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
