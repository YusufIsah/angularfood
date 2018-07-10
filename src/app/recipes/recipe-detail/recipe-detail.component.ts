import { Component, OnInit, Input } from '@angular/core';
import { RecipeModule } from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
   @Input() recipe: RecipeModule;
  constructor() { }

  ngOnInit() {
  }

}
