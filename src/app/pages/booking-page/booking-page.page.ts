import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.page.html',
  styleUrls: ['./booking-page.page.scss'],
})
export class BookingPagePage implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


    this.formData = new FormGroup({
      date: new FormControl(),
      time: new FormControl(),
      ohip: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    });
  }

  onSubmitNew(){
    // console.log(this.formData.value)
    // this.ldData.addData((this.formData.value));
    console.log(this.formData.value)
   }

}
