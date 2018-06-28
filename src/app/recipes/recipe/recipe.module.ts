import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RecipeModule {
  private _name: string;
  private _description: string;
  private _imagePath: string;

  constructor(newname: string, newdescription: string, newimagePath: string ) {
    this._name = newname;
    this._description = newdescription;
    this._imagePath = newimagePath;
  }
   get name() {
    return this._name;
  }
   get description() {
    return this._description;
  }
  get imagePath() {
    return this._imagePath;
  }
}
