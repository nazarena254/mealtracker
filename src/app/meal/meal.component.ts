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
  
  highCalorie(){
    const calorieAboveMedium:any[]=[];
    for(let i=0; i<this.meals.length; i++){
      if(this.meals[i].calories > 500){
        calorieAboveMedium.push(this.meals[i]);
      }
    }
    this.meals=calorieAboveMedium;
    alert("View meals with CALORIES above 500");
  }

  lowCalorie(){
    const calorieBelowMedium:any[]=[];
    for(let i=0; i<this.meals.length; i++){
      if(this.meals[i].calories < 500){
        calorieBelowMedium.push(this.meals[i]);
      }
    }
    this.meals = calorieBelowMedium;
    alert("View meals with CALORIES below 500");
  }
 
  
  // deleteMeal(meals:any){
  //   const index: number = this.meals.indexOf(meals);
  //   if (index !== -1) {
  //   this.meals.splice(index, 1);
  //   }
  // }
  deleteMeal(value){
    const index: number = this.meals.indexOf(value);
    this.meals.splice(index, 1);
    alert("Are sure you want to delete Meal?");
  }



  meals: Test[] = [];
  constructor(private mealService:MealService) { this.meals=this.mealService.getMeals(); }
 
  ngOnInit(): void {}

}
