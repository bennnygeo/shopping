import { Component } from '@angular/core';
import { Tag } from '../../../shared/modal/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {

  tags?:Tag[] = [];

  constructor(private foodService:FoodService){
    this.tags = this.foodService.getAllTags();
  }

}