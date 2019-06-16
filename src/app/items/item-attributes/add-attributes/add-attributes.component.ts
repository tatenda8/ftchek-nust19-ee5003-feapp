import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemAttributesService } from '../../services/item-attributes.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-add-attributes',
  templateUrl: './add-attributes.component.html',
  styleUrls: ['./add-attributes.component.css']
})
export class AddAttributesComponent implements OnInit {

  public itemAttributeForm: FormGroup;
  obj1: any;
  constructor(private itemAttributesService: ItemAttributesService,
              public iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.itemAttributeForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
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
     name: this.itemAttributeForm.get('name').value
    };
    console.log(formValue);
    this.itemAttributesService.saveItemAttribute(formValue)
      .subscribe(response => {
        this.obj1 = response;
        this.itemAttributeForm.reset();
        this.iziToast.success({    title: 'OK',
        message: 'Attribute Successfully Added!',
        position: 'center', });
      },
      err => {
        this.iziToast.error({    title: 'Error',
         message: `Error! Can't Connect to Server`,
        position: 'center', });
      });

  }

}
