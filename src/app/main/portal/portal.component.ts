import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {



constructor( public iziToast: Ng2IzitoastService) { }

ngOnInit() {
  this.displayDetails();
  }

displayDetails() {
  
  }
}


