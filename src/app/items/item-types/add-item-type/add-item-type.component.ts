import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ItemTypesService } from '../../services/item-types.service';
import { ItemAttributesService } from '../../services/item-attributes.service';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-add-item-type',
  templateUrl: './add-item-type.component.html',
  styleUrls: ['./add-item-type.component.css']
})
export class AddItemTypeComponent implements OnInit {
  public itemTypeForm: FormGroup;
  public itemAttributes;
  obj1: any;
  attribs: number[];
  attributes: any;
  public itemForm: FormGroup;
  category: any;


  constructor(private itemTypeService: ItemTypesService,
              private itemAttributesService: ItemAttributesService,
              private router: Router,
              public iziToast: Ng2IzitoastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getItemAttributes();
  }

  private createForm() {
    this.itemTypeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      itemAttributes: new FormArray([])
    });
  }

  getItemAttributes() {
    this.itemAttributesService.getItemAttributes()
      .subscribe(response => {
        this.itemAttributes = response;
      });
  }

  addItemAttribute(item: string) {
    // this.itemAttributesArray.push(new FormControl(item, Validators.required));
    this.itemAttributesArray.push(new FormControl(item));
  }

  get itemAttributesArray(): FormArray {
    return this.itemTypeForm.get('itemAttributes') as FormArray;
  }

  getAttributesOfType() {
  }

  updateFormArray(itemId) {
    // console.log(this.itemAttributesArray.value);

    if (this.itemAttributesArray.value.some(item => item == itemId)) {
      this.deleteAttribute(this.itemAttributesArray.value.indexOf(itemId));
      return;
    }
    this.addItemAttribute(itemId);

  }

  deleteAttribute(index: number) {
    this.itemAttributesArray.removeAt(index);
  }

  onSubmit() {
    this.iziToast.question({
      timeout: 0,
      close: false,
      overlay: true,
       id: 'question',
       zindex: '999',
       title: 'Submission',
       message: 'Submit?',
       position: 'center',
       buttons: [        ['<button><b>YES</b></button>', (instance, toast) => {
         this.onSubmit2();
         instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

       }
      , true],

      ['<button>NO</button>', function(instance, toast) {
      instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

    }], ]
  })
  }

  onSubmit2() {
    this.itemTypeService.saveItemType(this.itemTypeForm.value)
       .subscribe(response => {
         this.category = response;
        // console.log(this.category);
         this.itemTypeForm.reset();
         this.iziToast.success({    title: 'OK',
         message: 'Type Successfully Added!',
         position: 'center',
        overlay: true });
       },
       err => {
         this.iziToast.error({    title: 'Error',
          message: `Error! Can't Connect to Server`,
         position: 'center',
          overlay: true });
       }
        );
  }


}
