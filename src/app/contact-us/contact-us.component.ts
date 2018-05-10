import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 @ViewChild('contactUsForm') contactUsForm : NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.contactUsForm);
  }
  
}
