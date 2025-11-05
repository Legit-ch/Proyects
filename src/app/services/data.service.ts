import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.initializeData();
  }

  // Products methods
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductById(id: number): Product | undefined {
    return this.productsSubject.value.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    const currentProducts = this.productsSubject.value;
    this.productsSubject.next([...currentProducts, product]);
  }

  updateProduct(updatedProduct: Product): void {
    const currentProducts = this.productsSubject.value;
    const index = currentProducts.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      currentProducts[index] = updatedProduct;
      this.productsSubject.next([...currentProducts]);
    }
  }

  // User methods
  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  // Search functionality
  searchProducts(query: string): Product[] {
    const products = this.productsSubject.value;
    return products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    const products = this.productsSubject.value;
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  private initializeData(): void {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Smartphone Pro',
        price: 899,
        description: 'Latest smartphone with advanced features',
        image: '~/assets/images/phone.png',
        category: 'Electronics'
      },
      {
        id: 2,
        name: 'Wireless Headphones',
        price: 199,
        description: 'High-quality wireless headphones with noise cancellation',
        image: '~/assets/images/headphones.png',
        category: 'Electronics'
      },
      {
        id: 3,
        name: 'Running Shoes',
        price: 129,
        description: 'Comfortable running shoes for all terrains',
        image: '~/assets/images/shoes.png',
        category: 'Sports'
      },
      {
        id: 4,
        name: 'Coffee Maker',
        price: 79,
        description: 'Automatic coffee maker with timer',
        image: '~/assets/images/coffee.png',
        category: 'Home'
      },
      {
        id: 5,
        name: 'Gaming Laptop',
        price: 1299,
        description: 'High-performance laptop for gaming',
        image: '~/assets/images/laptop.png',
        category: 'Electronics'
      }
    ];

    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: '~/assets/images/user-avatar.png'
    };

    this.productsSubject.next(mockProducts);
    this.currentUserSubject.next(mockUser);
  }
}