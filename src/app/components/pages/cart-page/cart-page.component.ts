import { Component } from '@angular/core';
import { Cart } from '../../../shared/modal/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/modal/cart-item';
import { TitleComponent } from '../../partials/title/title.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterModule, TitleComponent, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, changeQuantity: string) {
    const quantity = parseInt(changeQuantity);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}
