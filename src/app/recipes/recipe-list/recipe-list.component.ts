import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModule>();

  recipesList: RecipeModule[] = [
         new RecipeModule('Food is good', 'This is so simple to prepare!',
         'assets/images/recipe-images/Recipe_logo.jpeg'),
         new RecipeModule('Another Food is good', 'This is so simple to prepare!',
         'assets/images/recipe-images/Soy-whey-protein-diet.jpg'),

  ];
  constructor() { }

  ngOnInit() {
  }

  selectedRecipeEmitter(recipe: RecipeModule) {
   this.recipeWasSelected.emit(recipe);
  }
}
