import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import {GetdataService} from '../../getdata.service';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.page.html',
  styleUrls: ['./booking-page.page.scss'],
})
export class BookingPagePage implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute,  private ldData: GetdataService, private alertController: AlertController, private actionSheet: ActionSheetController) { }

  data: any;

  ngOnInit() {
    this.data = this.route.snapshot.params.parm; 
    console.dir(this.route.snapshot);
    console.log("The data for the agent",this.data);


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
    this.showAlert()
    console.log("Form Data",this.formData.value)
   }

   async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to <strong>add this Appointment</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.ldData.addRec();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}


