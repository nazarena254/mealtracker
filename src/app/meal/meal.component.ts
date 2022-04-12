import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service/meal.service';
import { Test } from '../test';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers:[MealService]
})
export class MealComponent implements OnInit {

  meals: Test[] = [];
  constructor(private mealService:MealService) { this.meals=this.mealService.getMeals(); }
 
  ngOnInit(): void {}

}
