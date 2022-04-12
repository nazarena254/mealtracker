import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(public name:string,public calories:number,public detail:string){}
}
