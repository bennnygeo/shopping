import { Injectable } from '@angular/core';
import { Food } from '../shared/modal/food';
import { sample_foods } from '../mocks/data';

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
}
