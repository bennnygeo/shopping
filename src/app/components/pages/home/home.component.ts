import { Component } from '@angular/core';
import { Food } from '../../../shared/modal/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingModule, SearchComponent, TagsComponent, RouterModule, NotFoundComponent],
  providers: [StarRatingConfigService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    this.activatedRoute.params.subscribe(params => {
      if (params?.searchTerm) {
        foodsObservable = this.foodService.getFoodsBySearchTerm(params.searchTerm);

      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        foodsObservable = this.foodService.getAll();
      }

      foodsObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      });
    })
  }
}
