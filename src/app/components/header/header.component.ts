import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartQuantity: number = 0;

  constructor(public cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart:any) => {
      this.cartQuantity = cart.totalCount;
    });
  }
}
