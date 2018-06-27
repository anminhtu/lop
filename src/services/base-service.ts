import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/toPromise';
import { LocalStorage } from './local-storage';
import { Router } from '@angular/router';
import { Login, TokenResponse } from '../models/login-model';
import { FeedbackViewModel, LookupItemVo } from '../models/common-model';

import { LogService } from "./log-service";
import { CommonService } from "./common-service";

@Injectable()
export class BaseService {


    constructor(private http: HttpClient, private storage: LocalStorage, private router: Router, private httpTemp: Http, private logService: LogService) {

    }

    logout() {
        this.storage.setItem(CommonService.authorizationDataKey, null);
        this.router.navigate(['/login']);
    }

    getDataForGrid(masterName: string, gridQueryInfo: any, urlCustom: string = "") {
        if (gridQueryInfo == null) {
            var searchText = "";
            searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
            searchText = btoa('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>');

            gridQueryInfo = { skip: 0, take: 10, pageSize: 10, searchString: searchText };
        }
        let options = this.checkTokenExpired();
        var url = CommonService.baseUrl + masterName + "/GetDataForGrid";
        if (urlCustom != undefined && urlCustom != "") {
            url = CommonService.baseUrl + urlCustom;
        }
        return this.httpTemp.post(url, gridQueryInfo, options)
            .map((res: Response) => res.json());
    }

    clearAuthorizationToken() {
        this.storage.setItem(CommonService.authorizationDataKey, null);
    }


    create(masterName: string, dto: any) {
        let options = this.checkTokenExpired();
        return this.httpTemp.post(CommonService.baseUrl + masterName + "/Create", dto, options)
            .map((res: Response) => res.json());
    }
    update(masterName: string, dto: any) {
        let options = this.checkTokenExpired();
        return this.httpTemp.post(CommonService.baseUrl + masterName + "/Update", dto, options)
            .map((res: Response) => res.json());
    }
    getDataById(masterName: string, id: number) {
        let options = this.checkTokenExpired();
        return this.httpTemp.post(CommonService.baseUrl + masterName + "/GetById", { value: id }, options)
            .map((res: Response) => res.json());
    }
    deleteById(masterName: string, id: number) {
        let options = this.checkTokenExpired();
        return this.httpTemp.post(CommonService.baseUrl + masterName + "/DeleteById", { value: id }, options)
            .map((res: Response) => res.json());
    }
    callWithUrl(masterName: string, url: string, configObj: any) {
        let options = this.checkTokenExpired();
        return this.httpTemp.post(CommonService.baseUrl + masterName + "/" + url, configObj, options)
            .map((res: Response) => res.json());
    }
    callWithUrlNoCheckToken(masterName: string, url: string, configObj: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 

        return this.httpTemp.post(CommonService.baseUrl + masterName + "/" + url, configObj, options)
            .map((res: Response) => res.json());
    }
    checkTokenExpired(): RequestOptions {
        let dataTotken = this.storage.getItem<TokenResponse>(CommonService.authorizationDataKey);
        if (dataTotken != null) {
            var accessToken = dataTotken.access_token;
            //let headers = new Headers({ 'Authorization': 'Bearer ' + accessToken });
            //headers.append('Content-Type', 'application/json');
            
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return options;
        }
        else {
            this.logout();
        }
        Observable.throw('Your session is expired');
        return null;
    }

    getListLookupItem(url: string, data: any, isAuthorize: boolean = true): Observable<Array<LookupItemVo>> {
        let options = new RequestOptions();
        if (isAuthorize==true) {
            options = this.checkTokenExpired();
        }
        else {
            let headers = new Headers({ 'Content-Type': 'application/json'});
            options = new RequestOptions({ headers: headers });
        }

        return this.httpTemp.post(CommonService.baseUrl + url, data, options)
            .map((res: Response) => <Array<LookupItemVo>>res.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        if (error.status == 400) {
            this.logService.logError("User name and password are invalid.");
        }
        else if (error.status == 401) {
            var message = this.logService.getErrorFeedback(new FeedbackViewModel(error.status.toString(), error.statusText, error.text(), []))
                .subscribe(
                toast => {
                    message.unsubscribe();
                },
            );
        }
        else if (error.status == 403) {
            this.logout();
        }
        else if (error.status == 404) {
            this.logService.logError("404: Sorry but we couldn't find this page");
        }
        else if (error.status == 500) {
            var resultData = JSON.parse(error.text());
            if (resultData.Error != undefined) {
                if (resultData.Error == "Attempted to perform an unauthorized operation on this function.") {
                    this.logout();
                    return;
                }
                var messageError = this.logService.getErrorFeedback(new FeedbackViewModel(
                    resultData.Status, resultData.Error, resultData.StackTrace, resultData.ModelStateErrors))
                    .subscribe(
                    toast => {
                        messageError.unsubscribe();
                    },
                );
            }
        }
        else {
            this.logService.logError("An unexpected exception has occurred in the code, please contact your system administrator and pass on the information contained within this message.");
        }
        return Observable.throw(error || 'Server error');
    }

    deleteFileUpload(url: string, fileName: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let data = { value: fileName };
        return this.httpTemp.post(url, data, options)
            .map((res: Response) => res.json());
    }
}
