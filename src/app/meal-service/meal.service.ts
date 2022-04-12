import { Injectable } from '@angular/core';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})

export class MealService {
  meals : Test[]= [
    new Test('pilau',150,'low calories',),
    new Test('chapobeans',300,'medium calories',),
    new Test('ugalibeef',400,'high calories',)  ]

  constructor() { }

  getMeals(){
    return this.meals;
  }
  addMeal(meal:Test){
    this.meals.push(meal)
  }

  // calories: number;
  // sortMeal(){
  //  for (let calorie of calorie >= 500){
  //    return this.meals.calories;
  //  }
  // }

}
