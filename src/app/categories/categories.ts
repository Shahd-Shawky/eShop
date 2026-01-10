import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [NgFor],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
})
export class Categories {
   categories = [
    {
      name: 'Clothes',
      // products: 12,
      image: 'clothes.webp',
    },
      // {
      //   name: 'Sneakers',
      //   products: 8,
      //   image: 'sneakers.webp',
      // },
      // {
      //   name: 'Watches',
      //   products: 15,
      //   image: 'watches.webp',
      // },
      // {
      //   name: 'Bags',
      //   products: 9,
      //   image: 'bags.webp',
      // },

  ];

}
