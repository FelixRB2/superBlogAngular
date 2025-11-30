import { Component, inject } from '@angular/core';
import { ArticuloInterface } from '../../interfaces/articulo-interface';
import { ApiService } from '../../service/apiservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-noticia-form',
  imports: [FormsModule],
  templateUrl: './nueva-noticia-form.html',
  styleUrl: './nueva-noticia-form.css',
})
export class NuevaNoticiaForm {
  private api = inject(ApiService);
  titulo = '';
  imagen = '';
  texto = '';
  fecha = new Date();

  

  agregarNoticia() {
    if(!this.titulo || !this.texto || !this.fecha) {
      alert('Rellene todos los campos');
      return;
    }
    const nueva: ArticuloInterface = {
      id: Date.now(),
      titulo: this.titulo,
      imagen: this.imagen || undefined,
      texto: this.texto,
      fecha: this.fecha
    };

    this.api.agregarArticulo(nueva);

    this.titulo = '';
    this.texto = '';
    this.imagen = '';
  }

}
