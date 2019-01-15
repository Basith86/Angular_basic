import { Component, OnInit, Input, ViewChild, ViewContainerRef , ComponentFactoryResolver, ComponentRef ,ChangeDetectorRef, TemplateRef, Output, EventEmitter} from '@angular/core';


import { Dynamic2Component } from '../dynamic2/dynamic2.component';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  
  @Input() public name : string;
  
  
  constructor(private resolver : ComponentFactoryResolver) { }

  ngOnInit() {
  }

  @ViewChild("alertContainer", { read: ViewContainerRef }) container : any;

  componentRef: ComponentRef;



  createComponent(type:any) {
    
    this.container.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(Dynamic2Component);

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => (event));
    

  }

 
 
}


