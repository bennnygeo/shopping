import { Injectable } from '@angular/core';
import { Food } from '../shared/modal/food';
import { sample_foods, sample_tags } from '../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getFoodsBySearchTerm(term: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(term.toLowerCase()));
  }

  getAllTags() {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:string){
    return this.getAll().find(food=>food.id===foodId) ?? new Food()
  }
}
