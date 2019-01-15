import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListserviceService } from './listservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ModaloneComponent } from './modalone/modalone.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModaltwoComponent } from './modaltwo/modaltwo.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
import { TabsComponent } from './tabs/tabs.component';







@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ModaloneComponent,
    ModaltwoComponent,
    AppComponent,
    DynamicComponent,
    Dynamic2Component,
    TabsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ListserviceService],
  entryComponents: [ Dynamic2Component ],
  bootstrap: [AppComponent]
})
export class AppModule { }
