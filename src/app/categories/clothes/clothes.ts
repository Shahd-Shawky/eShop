// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ClothesService } from './clothes.service';

// @Component({
//   selector: 'app-clothes',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './clothes.html',
//   styleUrls: ['./clothes.css'],
// })
// export class Clothes implements OnInit {
//   clothes: Clothes[] = [];
//   isLoading = true;

//   constructor(private clothesService: ClothesService) {}

//   ngOnInit(): void {
//     this.clothesService.getClothes().subscribe({
//       next: () => {
//         this.isLoading = false;
//       },
//       error: () => {
//         this.isLoading = false;
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clothes.html',
  styleUrls: ['./clothes.css'],
})
export class Clothes implements OnInit {
  clothes: any[] = [];
  isLoading = true;

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe({
      next: (data) => {
        this.clothes = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}