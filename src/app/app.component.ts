import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoweb';
  peliculas =[
    {
      titulo : "Titanic",
      fechaLanzamiento : new Date('2024-12-21'),
      precio : 20.00,
      poster : 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'
    },
    
    {
      titulo : "El Gladiador 2",
      fechaLanzamiento : new Date('2024-12-25'),
      precio : 10.00,
      poster : 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Gladiator_II_%282024%29_poster.jpg/220px-Gladiator_II_%282024%29_poster.jpg'
    },
    

    {
      titulo : "Moana 2",
      fechaLanzamiento : new Date('2024-12-19'),
      precio : 15.00,
      poster : 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Moana_2_poster.jpg/220px-Moana_2_poster.jpg'

    },
    {
      titulo : "Rey León 1 1/2",
      fechaLanzamiento : new Date('2025-1-1'),
      precio : 8.00,
      poster :'https://upload.wikimedia.org/wikipedia/en/a/a9/Lion_king_1_half_cover.jpg'
    },
    {
      titulo : "Superman",
      fechaLanzamiento : new Date('2025-1-25'),
      precio : 30.00,
      poster :'https://upload.wikimedia.org/wikipedia/en/1/15/Superman_%26_Lois_Season_1_Poster.jpg'
    },
    {
      titulo : "The Substance",
      fechaLanzamiento : new Date('2025-1-1'),
      precio : 40.00,
      poster :'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/The_Substance_poster.jpg/220px-The_Substance_poster.jpg'
    },
    {
      titulo : "Los Increibles",
      fechaLanzamiento : new Date('2024-10-5'),
      precio : 100.00,
      poster :'https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg'
    },
    {
      titulo : "Avatar",
      fechaLanzamiento : new Date('2023-5-11'),
      precio : 150.00,
      poster :'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg'
    }

  ]
};
