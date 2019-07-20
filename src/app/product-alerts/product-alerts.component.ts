import { Component, OnInit, Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

 @Input() valen;
 @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}