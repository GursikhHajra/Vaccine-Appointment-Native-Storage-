import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Vdata } from '../vdata';
import { GetdataService } from '../getdata.service';
import VDATA from '../../assets/data/vaccineData.json' 
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() myVar;

  myData: Vdata;
  jsonData: Vdata[] = VDATA.VaccineData;
  data: any;
  show: boolean = false;
  deleteId: number;

  isShown: boolean = false;
  agent: string;

  myMsg: any;

  constructor(private router: Router, private ldData: GetdataService, private route: ActivatedRoute, private alertController: AlertController, private actionSheet: ActionSheetController) {}



  
  async showAlert() {
    /*const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sub Alert',
      message: 'Are you sure you want to Delete?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('no was clicked')
        }
      },
      {
        text: 'Yes',
        cssClass: 'secondary',
        handler: () => {
          console.log('yes was clicked')
        }
      }
    ]
    });

    await alert.present();*/

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to <strong>Delete this Appointment</strong>!!!',
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
            this.deleteMyData()
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  

  loadMyData(){
    this.ldData.laodData();
    
   
}

retrieveMyDate(){
  //this.myVar = this.ldData.retrieveDate();
  //this.ldData.showAll();
  this.myVar = this.ldData.retrieveDate();
  console.log("it data", this.myVar);
  this.ldData.setMessage(this.jsonData.length);
  console.log("len", this.jsonData.length)

}

  check() {
    if(this.agent == "And")
    this.isShown = true;
    else
    this.isShown = false;

    console.log(this.agent)
    }

  deleteMyData(){
    //this.showAlert();
    //parseInt(deleteNum);
    //this.myVar.splice(parseInt(deleteNum), 1);
    let x = this.myVar[this.deleteId]
    this.myVar.splice(this.deleteId, 1);
    this.ldData.deleteData(this.deleteId , x);
    this.ldData.setMessage(this.jsonData.length);
    console.log("len", this.jsonData.length)


   
    //console.log(this.deleteId)
   // console.log(x);
  }

  ngOnInit() 
  {
    this.loadMyData(); 
    
    
    this.ldData.sharedMessage.subscribe(
      message => { this.myMsg = message } );  
  }
}
