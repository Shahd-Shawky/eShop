import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [NgFor, RouterLink],
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
  ];

}
