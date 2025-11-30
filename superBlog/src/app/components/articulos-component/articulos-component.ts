import { Component, inject } from '@angular/core';
import { ArticuloInterface } from '../../interfaces/articulo-interface';
import { ApiService } from '../../service/apiservice';
import { ArticuloCard } from '../articulo-card/articulo-card';

@Component({
  selector: 'app-articulos-component',
  standalone: true,
  imports: [ArticuloCard],
  templateUrl: './articulos-component.html',
  styleUrls: ['./articulos-component.css'],
})
export class ArticulosComponent {
  private api = inject(ApiService);

  // Obtenemos los artículos desde el servicio
  articulos: ArticuloInterface[] = this.api.getAllArticles();
}
