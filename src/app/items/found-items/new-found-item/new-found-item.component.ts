import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ItemTypesService } from '../../services/item-types.service';
import { FoundItemsService } from '../../services/found-items.service';
// import { StationService } from 'src/app/users/services/station.service';
import { StationService } from '../../../users/services/station.service';

import { RouterLink, Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-new-found-item',
  templateUrl: './new-found-item.component.html',
  styleUrls: ['./new-found-item.component.css']
})
export class NewFoundItemComponent implements OnInit {
  public itemForm: FormGroup;
  public itemTypes;
  public stations;
  obj1: any;

  constructor(private itemTypeService: ItemTypesService,
              private foundItemsService: FoundItemsService,
              private stationService: StationService,
              private router: Router,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createForm();
    this.getItemTypes();
    this.getStations();
  }

  private createForm() {
    this.itemForm = new FormGroup({
      itemTypeId: new FormControl('', Validators.required),
      attributes: new FormArray([], Validators.required),
      stationId: new FormControl(''),
      description: new FormControl('')
    });
  }

  private getItemTypes() {
    this.itemTypeService.getItemTypes()
      .subscribe(res => {
        this.itemTypes = res;
      });
  }

  private getStations() {
    this.stationService.getAllStations('0')
      .subscribe(res => {
        this.stations = res['content'];
      });
  }

  public onSelect(itemId: number) {
    this.createForm();
    this.itemForm.patchValue({
      itemTypeId: itemId
    });
    const items = this.itemForm.get('attributes') as FormArray;
    this.itemTypeService.getItemType(itemId)
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
      stationId: localStorage.getItem('stationId'),
      description: this.itemForm.get('description').value,
      attributeValues: this.arrayToObject(this.itemForm.get('attributes').value)
    };
    console.log(formValue);
    this.foundItemsService.saveFoundItem(formValue)
      .subscribe(response => {
        this.obj1 = response;
        console.log(response);
        this.itemForm.reset();
        this.iziToast.success({    title: 'OK',
        message: 'Item Successfully Saved!', 
        position: 'center',
        overlay: true});
      },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Can't Connect to Server`, 
        position: 'center', 
        overlay: true});
      });
  }

}
