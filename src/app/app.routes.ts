import { Routes } from '@angular/router';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './Actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './Actores/crear-actor/crear-actor.component';
import { CrearCineComponent } from './Cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './Cines/indice-cines/indice-cines.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarActorComponent } from './Actores/editar-actor/editar-actor.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarCineComponent } from './Cines/editar-cine/editar-cine.component';


export const routes: Routes = [
    
    {path: '', component:LandingPageComponent},
    {path: 'generos', component:IndiceGenerosComponent},
    {path: 'generos/crear', component:CrearGenerosComponent},
    {path: 'generos/editar/:id', component:EditarGeneroComponent},
    {path: 'actores', component:IndiceActoresComponent},
    {path: 'actores/crear', component:CrearActorComponent},
    {path: 'actores/editar/:id', component:EditarActorComponent},
    {path: 'peliculas/crear', component:CrearPeliculaComponent},
    {path: 'peliculas/editar/:id', component:EditarPeliculaComponent},
    {path: 'cines', component:IndiceCinesComponent},
    {path: 'cines/crear', component:CrearCineComponent},
    {path: 'cines/editar/:id', component: EditarCineComponent},
    {path: '**' , redirectTo:''},
    


];
