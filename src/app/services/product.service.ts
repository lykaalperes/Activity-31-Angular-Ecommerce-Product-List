import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Rosa Gallica', description: 'A classic red rose with a velvety texture and a sweet, intoxicating fragrance.', price: 150, imageUrl: 'assets/img/flower1.jpg' },
    { id: 2, name: 'Tulipa Spring Majesty', description: 'A vibrant purple tulip that symbolizes royalty and rebirth, perfect for spring gardens.', price: 120, imageUrl: 'assets/img/flower2.jpg' },
    { id: 3, name: 'Helianthus Sunshine', description: 'Bright yellow sunflowers that bring joy and warmth, ideal for summer bouquets.', price: 180, imageUrl: 'assets/img/flower3.jpg' },
    { id: 4, name: 'Lilium Stargazer', description: 'A striking pink lily with white edges, known for its bold beauty and delightful fragrance.', price: 200, imageUrl: 'assets/img/flower4.jpg' },
    { id: 5, name: 'Orchid Dendrobium', description: 'Exotic purple orchids that exude elegance and sophistication, perfect for special occasions.', price: 250, imageUrl: 'assets/img/flower5.webp' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
