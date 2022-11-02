import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactServicesService } from 'src/app/service/contact-services.service';

interface States {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Id:any = this.route.snapshot.paramMap.get("Id");
  ngOnInit(): void {
    this.getContactById();
  }
  constructor(private contactService: ContactServicesService, private router: Router, private route:ActivatedRoute) { }

  cityControl = new FormControl<string | null>(null, Validators.required);
  cities: string[] = [
     'Mumbai',
     'Chennai',
     'Panjim',
     'Banglore',
  ];

  stateControl = new FormControl<States | null>(null, Validators.required);
  states: States[] = [
    { name: 'Maharashtra' },
    { name: 'Rajasthan' },
    { name: 'Goa' },
    { name: 'Kerla'},
  ];
  name :string ='';
  addContact= new FormGroup({
    fullName : new FormControl('',[Validators.pattern("^[A-Z]{1}[a-z]{2,}[\\s][A-Z]{1}[a-z]{2,}$")]),
    phoneNumber : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    state : new FormControl('',[Validators.required]),
    zip : new FormControl('',[Validators.required]),
    country : new FormControl('India') 
  })

  get fullName() {
    return this.addContact.get('fullName');
  }



  cancel(){
    this.router.navigate(["dashboard"]);
  }
  // addContactDetails(){
  //   console.warn(this.addContact.value);
  // }
  addContactDetails(){
    console.warn(this.addContact.value,this.Id);
    this.contactService.addNewContact(this.addContact.value).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }
  updateContact() {
    this.contactService.updateContactById(this.addContact.value, this.Id).subscribe((response: any) => {
      this.router.navigate(["dashboard"]);
    });
  }
  getContactById(){
    if(this.Id==null){
      this.addContact;
      return
    }else{    
      this.contactService.getContactById(this.Id).subscribe((response:any) => {
        console.log(response.content);
        this.addContact = new FormGroup({
          fullName : new FormControl(response.content['fullName']),
          phoneNumber : new FormControl(response.content['phoneNumber']),
          address : new FormControl(response.content['address']),
          city : new FormControl(response.content['city']),
          state : new FormControl(response.content['state']),
          zip : new FormControl(response.content['zip']),
          country : new FormControl('India') 
        })
      });
    }
  }

}
