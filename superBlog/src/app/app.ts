import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { ArticuloCard } from "./components/articulo-card/articulo-card";
import { ArticulosComponent } from "./components/articulos-component/articulos-component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticuloCard, ArticulosComponent, RouterLink, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('superBlog');
}
