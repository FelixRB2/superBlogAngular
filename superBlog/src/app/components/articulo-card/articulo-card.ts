import { Component, Input, inject } from '@angular/core';
import { ArticuloInterface } from '../../interfaces/articulo-interface';
import { RouterLink } from "@angular/router";
import { ApiService } from '../../service/apiservice';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.html',
  styleUrls: ['./articulo-card.css'],
  imports: [RouterLink],
})
export class ArticuloCard {
  @Input() articulo!: ArticuloInterface;
  private api = inject(ApiService);

  eliminarNoticia() {
   if (confirm(`¿Seguro que quieres eliminar "${this.articulo.titulo}"?`)) {
      this.api.eliminarNoticia(this.articulo.id);
    }
  }
}
