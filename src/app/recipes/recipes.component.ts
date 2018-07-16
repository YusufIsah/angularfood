import { RecipeModule } from './recipe/recipe.module';
import { Component, OnInit } from '@angular/core';
import { RecipeserviceService } from '../shared/services/recipeservice.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeserviceService]
})
export class RecipesComponent implements OnInit {
  selectedRecipeClick: RecipeModule;

  constructor(private recipeService: RecipeserviceService) { }

  ngOnInit() {
    this.recipeService.getSelectedRecipe().subscribe(
      (recipe: RecipeModule) => {
        this.selectedRecipeClick = recipe;
      }
    );
  }

}
