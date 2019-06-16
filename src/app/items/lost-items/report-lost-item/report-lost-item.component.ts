import { Component, OnInit } from '@angular/core';
import { ItemTypesService } from '../../services/item-types.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { LostItemsService } from '../../services/lost-items.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-report-lost-item',
  templateUrl: './report-lost-item.component.html',
  styleUrls: ['./report-lost-item.component.css']
})
export class ReportLostItemComponent implements OnInit {
  public itemForm: FormGroup;
  public itemTypes;
  public stations;
  obj1: any;

  constructor(private itemTypesService: ItemTypesService,
              private lostItemsService: LostItemsService,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createForm();
    this.getItemTypes();
  }

  private createForm() {
    this.itemForm = new FormGroup({
      itemTypeId: new FormControl('', Validators.required),
      attributes: new FormArray([], Validators.required),
      description: new FormControl(''),
      email: new FormControl('', Validators.required),
    });
  }

  private getItemTypes() {
    this.itemTypesService.getItemTypes()
      .subscribe(res => {
        this.itemTypes = res;
      });
  }


  public onSelect(itemId: number) {
    this.createForm();
    this.itemForm.patchValue({
      itemTypeId: itemId
    });
    const items = this.itemForm.get('attributes') as FormArray;
    this.itemTypesService.getItemType(itemId)
      .subscribe(res => {
        res['itemAttributes'].forEach(element => {
          items.push(this.addAttribute(element.name, element.id));
        });
      });

  }



  public addAttribute(prop, attributeId) {
    if (prop === 'NameOfHolder') {
      return new FormGroup({
        id: new FormControl(attributeId),
        property: new FormControl(prop),
        value: new FormControl('')
      });
    } else if (prop === 'Description') {
      return new FormGroup({
        id: new FormControl(attributeId),
        property: new FormControl(prop),
        value: new FormControl('')
      });
    } else {
      return new FormGroup({
        id: new FormControl(attributeId),
        property: new FormControl(prop),
        value: new FormControl('', Validators.required)
      });
    }
  }

  private arrayToObject(array) {
    return array.reduce((obj, item) => {
      obj[item.id] = item.value;
      return obj;
    },
      {});
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



  public onSubmit2() {
    const formValue = {
      itemTypeId: this.itemForm.get('itemTypeId').value,
      email: this.itemForm.get('email').value,
      description: this.itemForm.get('description').value,
      attributeValues: this.arrayToObject(this.itemForm.get('attributes').value)
    };
    console.log(formValue);
    this.lostItemsService.saveLostItem(formValue)
      .subscribe(response => {
        this.obj1 = response;
        this.itemForm.reset();
        this.iziToast.success({    title: 'OK',
        message: `Report Successfully Submitted! \n If your item is found you will be notified.`,
        position: 'center',
        overlay: true });
      },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Can't Connect to Server`,
        position: 'center',
        overlay: true });
      });
  }

}
