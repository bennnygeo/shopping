import { Component } from '@angular/core';
import { Food } from '../../../shared/modal/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingModule],
  providers: [StarRatingConfigService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params?.searchTerm) {
        this.foods = this.foodService.getFoodsBySearchTerm(params.searchTerm);
      }else{
        this.foods = this.foodService.getAll();
      }
    })
  }
}
