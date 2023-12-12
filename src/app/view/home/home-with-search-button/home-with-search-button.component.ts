import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'home-with-search-button',
  templateUrl: './home-with-search-button.component.html',
  styleUrls: ['./home-with-search-button.component.scss'],
})
export class HomeWithSearchButtonComponent implements OnInit {
  foods: Food[] = [];
  filteredDishes: Food[] = [];

  searchSubject = new Subject<string>();

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit() {
    this.filteredDishes = this.foods;
  }

  filterResults(value: string) {
    if (!value) {
      this.filteredDishes = this.foods;
    } else {
      this.filteredDishes = this.foods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }
}
