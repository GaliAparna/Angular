import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  private contact:Contact;
   

  constructor
  (private constServ:ContactService,
    private routeDate:ActivatedRoute) { 
    
    
  }

  ngOnInit() {
    this.routeDate.params.subscribe(
      (params)=>{
        let contactId=params['id'];
        if(contactId){
          this.contact=this.constServ.get(contactId);
        }
      
      }
    );
  }

}
