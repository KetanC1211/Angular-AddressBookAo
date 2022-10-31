import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name :string ='';
  constructor() { }

  ngOnInit(): void {
  }
  addContact= new FormGroup({
    fullName : new FormControl(''),
    phoneNumber : new FormControl(''),
    address : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    zipCode : new FormControl('') 
  })
  addContactDetails(){
    console.warn(this.addContact.value);
  }
}
