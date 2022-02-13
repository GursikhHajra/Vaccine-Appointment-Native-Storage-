import { Injectable } from '@angular/core';
import VDATA from '../assets/data/vaccineData.json';
import {Vdata} from '../app/vdata';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private router: Router) { }
}
