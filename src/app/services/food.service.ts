import { Injectable } from '@angular/core';
import { Food, Tag } from '../shared/modal/food';
import { sample_foods, sample_tags } from '../mocks/data';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { FOOD_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodsBySearchTerm(term: string) {
    // return this.getAll().pipe(
    //   filter((food:Food) => food.name.toLowerCase().includes(term.toLowerCase())
    // );
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + term);
  }

  getAllTags(): Observable<Tag[]> {
    // return sample_tags;
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag == "All" ? this.getAll() : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string):Observable<Food> {
    // return this.getAll().find(food => food.id === foodId) ?? new Food()
    return this.http.get<Food>(FOOD_BY_ID_URL+foodId);
  }
}
