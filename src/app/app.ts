import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { HeroBanner } from "./hero-banner/hero-banner";
import { Categories } from "./categories/categories";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, HeroBanner, Categories, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})

export class App {
  protected readonly title = signal('eShop');
}
