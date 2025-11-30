import { Injectable } from '@angular/core';
import { ArticuloInterface } from '../interfaces/articulo-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private articulos: ArticuloInterface[] = [];

  constructor() {
  fetch('http://localhost:8080/api/articulos')
    .then(res => res.json())
    .then((data: any[]) => {
      data.forEach((articulo) => {
        this.articulos.push({
          id: Number(articulo.id),       // <- aseguramos que sea number
          titulo: articulo.titulo,
          texto: articulo.texto,
          imagen: articulo.imagen,
          fecha: articulo.fecha // <- convertir string a Date
        });
      });
    })
    .catch(err => console.error('Error al cargar artículos:', err));
}


  // Método para que los componentes obtengan los artículos
  getAllArticles(): ArticuloInterface[] {
    return this.articulos;
  }

  agregarArticulo(nueva: ArticuloInterface) {
    this.articulos.push(nueva);
  }

  eliminarNoticia(id: number) {
  // Eliminamos el artículo del array
    const index = this.articulos.findIndex(a => a.id === id);
    if (index !== -1) {
      this.articulos.splice(index, 1); // elimina del array
    }
  }

  getArticuloById(id:number): ArticuloInterface | undefined {
    return this.articulos.find(a => a.id === id);
  }

  editarArticulo(articulo: ArticuloInterface) {
    const index = this.articulos.findIndex(a => a.id === articulo.id);
    if(index !== -1) {
      this.articulos[index] = articulo;
    }
  }
}
