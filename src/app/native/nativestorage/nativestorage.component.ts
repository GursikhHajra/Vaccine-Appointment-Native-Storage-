import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
//import { KeyValue } from '../../keyValue';
import { Vdata } from 'src/app/vdata';

@Component({
  selector: 'app-nativestorage',
  templateUrl: './nativestorage.component.html',
  styleUrls: ['./nativestorage.component.scss'],
})
export class NativestorageComponent implements OnInit {

  msg = 'NativeStorge ...';
  inKey; 
  inValue; 
  values: Vdata[] = new Array();
  constructor(private storage: NativeStorage) {}

  ngOnInit() {}
  
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
