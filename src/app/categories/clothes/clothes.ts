import { Component, OnInit } from '@angular/core';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothes',
  imports: [],
  templateUrl: './clothes.html',
  styleUrls: ['./clothes.css'],
})
export class Clothes implements OnInit {
  clothes: Clothes[] = [];
  isLoading = true;

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe({
      next: (data) => {
        // this.clothes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching clothes data:', err);
        this.isLoading = false;
      }
    })
  }

}
