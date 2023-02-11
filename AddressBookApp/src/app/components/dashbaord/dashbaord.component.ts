import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ContactServicesService } from 'src/app/service/contact-services.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
  allcontactList:Array<any> = [];
  totalContact:number=0;


  constructor(private contactService: ContactServicesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  btnClick=  () => {
    this.router.navigateByUrl('/form');
  };

  getAllContacts(){    
    this.contactService.getAllContacts().subscribe((data:any) => {
      console.log(data);
      this.allcontactList = data.content;
      this.totalContact = this.allcontactList.length;
    });
  }

  deleteContactByID(Id:number){
    console.log(Id);
    this.contactService.deleteContact(Id).subscribe((response:any) =>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);      
    }); 
  }
  editById(Id:number){
    console.log(Id)
    let contact = this.allcontactList.find((contact)=>{return contact.id === Id})
    console.log(contact);
    this.router.navigate(['/update', Id]);
  }
  
}

