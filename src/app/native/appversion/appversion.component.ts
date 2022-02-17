import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-appversion',
  templateUrl: './appversion.component.html',
  styleUrls: ['./appversion.component.scss'],
})
export class AppversionComponent implements OnInit {

  appName; vCode; vNumber; package;
constructor(private appVersion: AppVersion) {
this.appVersion.getAppName().then(value => {
this.appName = value;
console.log(this.appName);
}).catch(err => {
alert(err); });
this.appVersion.getPackageName().then(value => {
this.package = value;
console.log(this.package);
}).catch(err => {
alert(err); });
this.appVersion.getVersionCode().then(value => {
  this.vCode = value;
  console.log(this.vCode);
  }).catch(err => {
  alert(err); });
  this.appVersion.getVersionNumber().then(value => {
  this.vNumber = value;
  console.log(this.vNumber);
  }).catch(err => {
  alert(err); });
  }   // constructor

  ngOnInit() {}

}
