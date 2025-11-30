import { Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos-component/articulos-component';
import { NuevaNoticiaForm } from './components/nueva-noticia-form/nueva-noticia-form';
import { EditarNoticiaForm } from './components/editar-noticia-form/editar-noticia-form';

export const routes: Routes = [

    { path: 'home', component: ArticulosComponent },
    { path: 'nueva-noticia', component: NuevaNoticiaForm },
    { path: 'editar-noticia/:id', component: EditarNoticiaForm },
    { path: '**', redirectTo: 'home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }


];
