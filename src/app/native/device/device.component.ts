import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {

  devicePlatform; uuid; serial; manufer; version;
  constructor(private device: Device) {
  this.devicePlatform = device.platform;
  this.uuid = device.uuid;
  this.serial = device.serial;
  this.manufer = device.manufacturer;
  this.version = device.version;
  }

  ngOnInit() {}

}
