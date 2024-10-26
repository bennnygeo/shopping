import { Injectable } from '@angular/core';
import { Cart } from '../shared/modal/cart';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Food } from '../shared/modal/food';
import { CartItem } from '../shared/modal/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {
  }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem?.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((acc, curItem) => acc + curItem.price, 0);
    this.cart.totalCount = this.cart.items.length;
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const item = localStorage.getItem('cart');
    return (item) ? JSON.parse(item) : new Cart();
  }
}
