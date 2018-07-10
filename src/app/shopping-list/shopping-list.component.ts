import { IngredientModule } from './../shared/ingredient.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModule[] = [
    new IngredientModule('Apple', 5),
    new IngredientModule('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredientAdded: IngredientModule) {
    this.ingredients.push(ingredientAdded);
  }

}
