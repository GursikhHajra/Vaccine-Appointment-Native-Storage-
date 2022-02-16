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

  data: any;

  ngOnInit() {


    this.formData = new FormGroup({
      setDate:  new FormControl(),
      setTime:  new FormControl(),
      setOhip:  new FormControl(),
      setEmail: new FormControl(),
      setPhone: new FormControl()
    });
  }

  onSubmit(){
    // console.log(this.formData.value)
    // this.ldData.addData((this.formData.value));
    console.log("Form Data",this.formData.value)
    this.data = this.route.snapshot.params.parm; 
    console.dir(this.route.snapshot);
    console.log("The data for the agent",this.data);
   }

}
