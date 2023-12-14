import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'home-with-debounce',
  templateUrl: './home-with-debounce.component.html',
  styleUrls: ['./home-with-debounce.component.scss'],
})
export class HomeWithDebounceComponent implements OnInit {
  foods: Food[] = [];
  filteredDishes: Food[] = [];

  searchSubject = new Subject<string>();

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit() {
    this.filteredDishes = this.foods;
    this.searchSubject.pipe(debounceTime(700)).subscribe((value) => {
      this.filterResults(value);
    });
  }

  filterResults(value: string) {
    if (!value.trim()) {
      this.filteredDishes = this.foods;
    } else {
      this.filteredDishes = this.foods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }
}
