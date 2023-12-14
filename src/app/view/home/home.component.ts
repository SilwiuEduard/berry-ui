import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
    // ActivatedRoute used for =>  { path: 'home-with-search-button', component: ... },
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else this.foods = foodService.getAll();
    });
  }

  ngOnInit(): void {}
}
