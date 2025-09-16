import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/productos/productos';
import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'nosotros', component: About},
  {path: 'productos', component: Productos},
  {path: 'formulario', component: Formulario}
];
