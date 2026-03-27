import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {

  Productos = [
    {id: 1, url: "/img/EscarchaPlancha.png", tittle:"Escarcha por Plancha", description: "Plancha de escarcha de distintos colores, personaliza tu plancha contactandonos!!!"},
    {id: 2, url: "/img/lentejuelasTiras.png", tittle:"Tiras de Lentejuelas", description: "Tiras de lentejuelas, personaliza tu tira contactandonos!!!"},
    {id: 3, url: "/img/MostacillaPlancha.png", tittle:"Mostacilla por Plancha", description: "Mostacilla por Planchas, personaliza tu plancha contactandonos!!!"}
  ]


}
