import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  modalForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.modalForm = fb.group({
      modalFormNameEx: ['',  Validators.required],
      name: ['', Validators.required],
      number: ['', Validators.required],
      modalFormEmailEx: ['', [Validators.email, Validators.required]],
      modalFormSubjectEx: ['', Validators.required],
      modalFormTextEx: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
