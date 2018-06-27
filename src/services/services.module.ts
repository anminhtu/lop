import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LocalStorage } from './local-storage';
import {BaseService } from './base-service';
import {ToasterModule,ToasterService} from 'angular2-toaster';
import {LogService } from './log-service';
import {CommonService } from './common-service';
import {BroadcastService } from './broadcast-service';

@NgModule({
    imports: [
        ToasterModule
    ],
    declarations: [],
    providers: [
        LocalStorage,
        BaseService,
        LogService,
        CommonService,
        ToasterService,
        BroadcastService],
})
export class ServicesModule { }