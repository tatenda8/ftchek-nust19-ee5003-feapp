import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-found-item',
  templateUrl: './edit-found-item.component.html',
  styleUrls: ['./edit-found-item.component.css']
})
export class EditFoundItemComponent implements OnInit {
@Input() formData;
itemForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
    this.initializeForm();
  }

  private createForm() {
    this.itemForm = new FormGroup({
      itemTypeId: new FormControl('', Validators.required),
      attributes: new FormArray([], Validators.required),
      stationId: new FormControl('', Validators.required),
      id: new FormControl()
    });
  }

  private initializeForm() {
    this.itemForm.patchValue(this.formData);
  }
}
