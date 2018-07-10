import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selectedNav = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(navSelect: string) {
      this.selectedNav.emit(navSelect);
  }

}
