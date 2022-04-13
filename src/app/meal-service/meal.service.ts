import { Injectable } from '@angular/core';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})

export class MealService {
  meals : Test[]= [
    new Test('Biryani',800,'medium calories',),
    new Test('chapobeans',150,'medium calories',),
    new Test('chaps&kuku',1200,'medium calories',),
    new Test('ugalibeef',400,'high calories',)  ]

  constructor() { }

  getMeals(){
    return this.meals;
  }
  addMeal(meal:Test){
    this.meals.push(meal)
  }
  // highCalorie(){
  //   const calorieAboveMedium:any[]=[];
  //   for(let i=0; i<this.meals.length; i++){
  //     if(this.meals[i].calories > 500){
  //       calorieAboveMedium.push(this.meals[i]);
  //     }
  //   }
  // }
  // lowCalorie(){
  //   const calorieBelowMedium:any[]=[];
  //   for(let i=0; i<this.meals.length; i++){
  //     if(this.meals[i].calories < 500){
  //       calorieBelowMedium.push(this.meals[i]);
  //     }
  //   }
  // }
  // calories: number;
  // sortMeal(){
  //  for (let calorie of calorie >= 500){
  //    return this.meals.calories;
  //  }
  // }

}
