import { Injectable } from '@angular/core';
import VDATA from '../assets/data/vaccineData.json';
import {Vdata} from '../app/vdata';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  msg = 'NativeStorge ...';
  inKey; 
  inValue; 
  values: Vdata[] = new Array();

  constructor(private router: Router, private storage: NativeStorage) { }

  showAll() {
    this.values = [];
    this.storage.keys()
    .then( data => {},
    error => console.log('showAll error: ' + error)
    );
    }  // showAll

    addRec() {
      this.storage.setItem(this.inKey, this.inValue)
      .then( data => {
      this.msg = 'Record inserted';
      },
      error => { this.msg = 'Record NOT inserted'; }
      );
      }

      removeRec() {
        this.storage.remove(this.inKey)
        .then( data => {
        this.msg = 'Record deleted';
        this.showAll();
        },
        error => { this.msg = 'Record NOT deleted'; }
        );
        }

        removeAll() {
          this.storage.clear()
          .then( data => {
          this.msg = 'Records deleted';
          this.values = [];
          },
          error => { this.msg = 'Records NOT deleted'; }
          );
          }
}
