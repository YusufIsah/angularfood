import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentNav = 'recipe';
  navChange(selectCurrentNav: string) {
    this.currentNav = selectCurrentNav;
  }
}


