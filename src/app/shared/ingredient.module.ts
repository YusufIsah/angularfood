import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class IngredientModule {

  constructor(private name: string, private amount: number) {

  }
  get getName() {
    return this.name;
  }
  get getAmount() {
    return this.amount;
  }
 }
