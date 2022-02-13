import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
//import { KeyValue } from '../../keyValue';

@Component({
  selector: 'app-nativestorage',
  templateUrl: './nativestorage.component.html',
  styleUrls: ['./nativestorage.component.scss'],
})
export class NativestorageComponent implements OnInit {

  msg = 'NativeStorge ...';
inKey; 
inValue; 
//values: KeyValue[] = new Array();
constructor(private storage: NativeStorage) {}

  ngOnInit() {}

}
