import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() public con : string;
  constructor() { }
  
  componentRef: ComponentRef;

  ngOnDestroy() {
    this.componentRef.destroy(); 
   }

  ngOnInit() {
  }

 

}
