import { Injectable } from '@angular/core';
import { Clothes } from './clothes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
    private apiUrl = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) {}

    getClothes(): Observable<Clothes[]> {
        return this.http.get<Clothes[]>(this.apiUrl);
    }
}