import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IngredientModule } from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  modalForm: FormGroup;
  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;
  @Output() newIngredient = new EventEmitter<IngredientModule>();
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
  onClickAdd() {
     const nameInput = this.nameInputField.nativeElement.value;
     const amountInput = this.amountInputField.nativeElement.value;
     const ingredientObj = new IngredientModule(nameInput, amountInput);
     this.newIngredient.emit(ingredientObj);
  }

}
