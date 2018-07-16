import { RecipeserviceService } from './../../shared/services/recipeservice.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipesList: RecipeModule[];

  constructor(private recipeService: RecipeserviceService) { }

  ngOnInit() {
    this.recipesList = this.recipeService.getRecipeList();
  }

}
