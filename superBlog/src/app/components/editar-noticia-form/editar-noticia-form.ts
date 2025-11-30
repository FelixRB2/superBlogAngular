import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/apiservice';
import { ArticuloInterface } from '../../interfaces/articulo-interface';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-noticia-form',
  imports: [FormsModule, FormsModule],
  templateUrl: './editar-noticia-form.html',
  styleUrl: './editar-noticia-form.css',
})
export class EditarNoticiaForm {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router)

  articuloId!: number;

  titulo = '';
  imagen = '';
  texto = '';
  fecha = new Date();

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam!==undefined) {
        this.articuloId = Number(idParam);
        const articulo = this.api.getArticuloById(this.articuloId);
        if(articulo) {
          this.titulo = articulo.titulo;
          this.imagen = articulo.imagen || '';
          this.texto = articulo.texto;
          this.fecha = articulo.fecha;
        } else {
          alert('articulo no encontrado');
          this.router.navigate(['/home']);
        }
      }
    });

  }

  editarNoticia() {
    if(!this.titulo || !this.texto || !this.fecha) {
      alert('Rellene todos los campos');
      return;
    }
      const editado: ArticuloInterface = {
        id: this.articuloId,
        titulo: this.titulo,
        imagen: this.imagen || undefined,
        texto: this.texto,
        fecha: this.fecha
      };
  
      this.api.editarArticulo(editado);
  
      this.router.navigate(['/home']);
  }
 }


