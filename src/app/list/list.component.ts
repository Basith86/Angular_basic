import { Component, OnInit, ViewChild, ViewContainerRef , ComponentFactoryResolver, ComponentRef ,ChangeDetectorRef, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ListserviceService } from '../listservice.service';

import { DynamicComponent } from '../dynamic/dynamic.component';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import {NgbdModalBasic} from '../modal-basic';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employees = [];
  constructor(private _listservice: ListserviceService, private resolver: ComponentFactoryResolver) { }
  

  ngOnInit() {
    this._listservice.getEmployees()
    .subscribe(data => this.employees = data);
  }

  showContactModal(content:any): void {

    const modal = this
  }

  
  goCNN(link:any) {
    //window.location.href = link;
}

}

