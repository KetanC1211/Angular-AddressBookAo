import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {
  baseUrl = environment.url;
  constructor(private http:HttpClient) { }
  addNewContact(contact : any){
    return this.http.post( this.baseUrl+"/save",contact);
  }  
  getAllContacts(){
    return this.http.get(`${this.baseUrl}/getAll`);
  }
  getContactById(Id:number){
    return this.http.get(`${this.baseUrl}/getContact/`+Id);
  }
  updateContactById(contact:any, Id:number){
    return this.http.put(`${this.baseUrl}/update/`+Id, contact);
  }
  deleteContact(Id:number){
    return this.http.delete(`${this.baseUrl}/delete/`+Id);
  }
  
}
