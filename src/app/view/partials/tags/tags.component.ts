import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tags } from 'src/app/shared/models/tags';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags?: Tags[];

  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
