import { Component } from '@angular/core';
import { Food } from '../../../shared/modal/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, StarRatingModule, NotFoundComponent],
  providers: [StarRatingConfigService],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {
  food!: Food;

  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    });
  }

  addToCartAction(food: Food) {
    this.cartService.addToCart(food);
    // this.router.navigateByUrl('/cart-page');
  }
}
