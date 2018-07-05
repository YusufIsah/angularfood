import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RecipeModule {
  // private _name: string;
  // private _description: string;
  // private _imagePath: string;

  constructor(private newname: string, private newdescription: string, private newimagePath: string ) {
    // this._name = newname;
    // this._description = newdescription;
    // this._imagePath = newimagePath;
  }
   get name() {
    return this.newname;
  }
   get description() {
    return this.newdescription;
  }
  get imagePath() {
    return this.newimagePath;
  }
}
