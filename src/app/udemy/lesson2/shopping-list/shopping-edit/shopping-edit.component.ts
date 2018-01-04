import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as Classes from '../../../../classes/classes';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInput: string;
  amountInput: number;
  @ViewChild('amountInput') amountInputElement: ElementRef;
  @Output() passIngredient = new EventEmitter<Classes.Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  add(nameInput: HTMLInputElement) {
    this.nameInput = nameInput.value;
    this.amountInput = this.amountInputElement.nativeElement.value;
    const ingredient = new Classes.Ingredient(this.nameInput, this.amountInput);
    this.passIngredient.emit(ingredient);
  }
}
