import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal-service/meal.service';
import { Test } from '../test';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  meal:Test=new Test('',0,'')
  constructor( private mealservice:MealService) { }

  ngOnInit(): void {
  }
  addMeal(){
   if(this.meal.name==='' || this.meal.calories===0 || this.meal.detail===''){
     alert('fill every field')
   }
   this.mealservice.addMeal(this.meal)
  }

}
