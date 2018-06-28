import { Component, OnInit } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipesList: RecipeModule[] = [
         new RecipeModule('Food is good', 'This is so simple to prepare!',
         'https://upload.wikimedia.org/wikipedia/commons/7/7a/African_recipes.jpg'),
         new RecipeModule('Food is good', 'This is so simple to prepare!',
         'https://upload.wikimedia.org/wikipedia/commons/7/7a/African_recipes.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
