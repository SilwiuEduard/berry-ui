import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'home-example',
  templateUrl: './home-example.component.html',
  styleUrls: ['./home-example.component.scss'],
})
export class HomeExampleComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
    // ActivatedRoute used for =>  { path: 'home-with-search-button', component: ... },
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else {
        this.foods = foodService.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
