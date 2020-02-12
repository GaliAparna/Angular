import { Injectable } from '@angular/core';
import{Contact} from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[];


  constructor() { 
    this.contacts=[
      {contactID:101,firstName:"Aparna",lastName:"Gali",dob:new Date("1-20-1999"),mobileNumber:"98908787",alternateMobileNumber:"98787898",mailId:"aparna.g199@gmail.com",organization:"Asoemthing"},
      {contactID:102,firstName:"Anusha",lastName:"Gali",dob:new Date("2-09-2000"),mobileNumber:"98979877688",alternateMobileNumber:"8978776",mailId:"aparna.g199@gmail.com",organization:"sdahfd"},
      {contactID:103,firstName:"Akshitha",lastName:"G",dob:new Date("1-09-1999"),mobileNumber:"98789778969",alternateMobileNumber:"89789789",mailId:"aparna.g199@gmail.com",organization:"sdahfd"},
      

      
    ];
  }
  getAll():Contact[]{
    return this.contacts;

  }
  get(id:number){
    return this.contacts.find((c)=>(c.contactID==id));
  }
  add(contact:Contact){
    this.contacts.push(contact);
  }
  update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID===contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;

    }


  }
  delete(id:number){
    let index=this.contacts.findIndex((c)=>(c.contactID===id));
    if(index>-1){
      this.contacts.splice(index,1);
  }
}
}
