import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/toPromise';
import { FeedbackViewModel } from '../models/common-model';
import { Toast, BodyOutputType, ToasterConfig, ToasterService } from 'angular2-toaster';
import * as _ from 'underscore';

@Injectable()
export class LogService {
    constructor(private http: Http, private toasterService: ToasterService) {
    }
    getErrorFeedback(feedback: FeedbackViewModel) {
        return this.http.get('/src/views/shared/errorHandlerTemplate.html')
            .map((res: Response) => {
                var html = res.text();
                var resultMessage = _.template(html)({ data: feedback });
                this.logError(resultMessage);
                return "";
            })
            .catch((err: Response) => {
                return Observable.throw(err || 'Server error');
            });
    }

    logError(message: string) {
        this.logIt(message, "error");
    }

    logSuccess(message: string) {
        this.logIt(message, "success");
    }

    logWarning(message: string) {
        this.logIt(message, "warning");
    }

    log(message: string) {
        this.logIt(message, "info");
    }

    logIt(message: string, toastType: string) {
        var toast: Toast = {
            type: toastType,
            body: message,
            bodyOutputType: BodyOutputType.TrustedHtml,
        };
        this.toasterService.pop(toast);
    }
}
