import { Injectable } from '@angular/core';
import VDATA from '../assets/data/vaccineData.json';
import {Vdata} from '../app/vdata';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  msg = 'NativeStorge ...';
  inKey; 
  inValue;
  values: Vdata[] = new Array();
  jsonData: Vdata[] = VDATA.VaccineData
  obsMsg: any;
  x: any;
  //data: Vdata[] = JSON.parse(this.jsonData);

  

  constructor(private router: Router, private storage: NativeStorage) { }
  
 /* loadData() {
    for(let i = 0; i < this.jsonData.length; i++) {
      let nativeS = JSON.stringify(this.jsonData[i]);
      this.storage.setItem(i.toString(), nativeS)
      console.log("This is Native",nativeS, "KeyValue", i, "JsonData: ", this.jsonData);
    }
  }
*//*
message = new BehaviorSubject<string>(this.storage.keys().toString());
setMessage(msg) {
//  (4) AsObservable
  this.message.next(this.x);
  this.message.subscribe(
    x => {console.log(`Value is ${x}.`); }
    );
}*/


c = new BehaviorSubject('');
sharedMessage = this.c.asObservable();
setMessage(msg) {
this.c.next(msg);
}
//  (4) AsObservable    
//sharedMessage = this.message.asObservable();





addRec() {
  this.storage.setItem(this.inKey, this.inValue)
  .then( data => {
  this.msg = 'Record inserted';
  console.log(this.storage.getItem(this.inKey))
  console.log(this.msg);
  },
  error => { this.msg = 'Record NOT inserted'; }
  );

  console.log("inValue: ", this.inValue);
  }

  laodData(){
    for (let i = 0; i < this.jsonData.length; i++) {
      this.inKey = i
      this.inValue = this.jsonData[i]
      this.addRec()
    }
  }


  retrieveDate(): Vdata[]{
    let v = [];

    this.storage.keys()
    .then(data => {
      for (let i=0; i<data.length; i++) {
        this.storage.getItem(data[i]).then(val => {
          v[i] = val
        })
      } 
    })
      console.log("this is v", v); 

      return v;
         //for (let i = 0; i < localStorage.length; i++){
     // this.storage.keys().sort().forEach(function(key){
    //  v.push(JSON.parse(this.storage.keys().toString()));
    //})
    }

    async get(key: string): Promise<any> {
      try {
      const result = await this.storage.getItem(this.inKey);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
      return result;
      }
      return null;
      } catch (reason) {
      console.log(reason);
      return null;
      }
      }


  /*getItem(storageRef: string, values)
  {
    this.storage.getItem('1')
  .then(
    data => console.log(data),
    error => console.error(error)
  );
  }
*/
  deleteData(id, val){     
    this.storage.remove(id)

    Object.keys(this.storage).sort().forEach(function(key){
      if (this.storage.getItem[key] === JSON.stringify(val))
     
      {
        console.log("DELETE=="+this.storage.getItem(key));
              this.storage.remove(key)
              }
      
      
            }) 
      
    console.log(id);
    console.log(val);
  }


  showAll() { 
    this.jsonData = [];
    this.storage.keys()
    .then( data => {},
    error => console.log('showAll error: ' + error)
    );
    }  // showAll



      removeRec() {
        this.storage.remove(this.inKey)
        .then( data => {
        this.msg = 'Record deleted';
        this.showAll();
        },
        error => { this.msg = 'Record NOT deleted'; }
        );
        }

       /* removeAll() {
          this.storage.clear()
          .then( data => {
          this.msg = 'Records deleted';
          this.values = [];
          },
          error => { this.msg = 'Records NOT deleted'; }
          );
          }*/
}
