import { Component, OnInit, Input, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.css']
})
export class Dynamic2Component implements OnInit {


  @Input() type: string;
  constructor() { }
  
  
  ngOnInit() {
  }
 

}
