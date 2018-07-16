import { RecipeserviceService } from './../../../shared/services/recipeservice.service';
import { RecipeModule } from './../../recipe/recipe.module';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModule;

  constructor(private recipeService: RecipeserviceService) { }

  ngOnInit() {
  }

  onSelectedRecipe() {
     this.recipeService.setSelectedRecipe(this.recipe);
  }
}
