import { Injectable, EventEmitter } from '@angular/core';
import { RecipeModule } from '../../recipes/recipe/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {
  private selectedRecipe = new EventEmitter<RecipeModule>();
  private recipesList: RecipeModule[] = [
    new RecipeModule('Food is good', 'This is so simple to prepare!',
    'assets/images/recipe-images/Recipe_logo.jpeg'),
    new RecipeModule('Another Food is good', 'This is so simple to prepare!',
    'assets/images/recipe-images/Soy-whey-protein-diet.jpg'),
  ];
  constructor() { }

  getRecipeList() {
    return this.recipesList.slice();
  }
  setSelectedRecipe(recipe: RecipeModule) {
    this.selectedRecipe.emit(recipe);
  }
   getSelectedRecipe() {
    return this.selectedRecipe;
  }
}
