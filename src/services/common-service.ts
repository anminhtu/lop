import { Data } from "@angular/router/src/config";

export class CommonService {
    static authorizationDataKey: string = "authorizationSupplierData";
    static signUpInfoKey: string = "SupplierSignUpInfo";
    static tourInfoKey: string = "TourInfo";
    static baseUrlWithoutApi='http://localhost:17109';
    static baseUrl = CommonService.baseUrlWithoutApi+'/api/';    
    static loginUrl = CommonService.baseUrlWithoutApi+'/token';
    public static BussinessGenericErrorMessageKey: string = "Following business rules have failed:";
    public static ObjectRequirement: string = "The {0} field is required";
    public static ObjectInvalid: string = "The {0} field is invalid";
    public static ObjectExists: string = "The {0} field is exists";
    public static NotEqualTime: string = "The {0} must be greater than the {1}.";
    public static GeneralExceptionMessageText: string = "An unexpected exception has occurred in the code, please contact your system administrator and pass on the information contained within this message.";
    public static UploadRequireText: string = "Please upload {0}.";
    public static AddAtleast:string="You must add at least {0}."
    public static ChangePassSuccess: string = "Change password success.";
    public static SaveItemSuccess: string = "Save {0} success.";
    public static ObjectNotMacth: string = "The {0} not match.";

    
    static format(str: string, obj: string[]) {
        return str.replace(/\{\s*([^}\s]+)\s*\}/g, function (m, p1, offset, string) {
            return obj[p1];
        });
    }

    static isEmail(email:string):boolean {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

    static isNullOrEmpty(str:string):boolean{
        if(str==undefined||str==null||str==""){
            return true;
        }
        return false;
    }
    
    static addDate(datetime:string,num:number):Date {       
      var d=new Date(datetime);
      d.setDate(d.getDate()+num);
      return d;
    }
    static formatTime(datetime:Date):string {
        var minute = datetime.getMinutes();
        var hours = datetime.getHours();
        var minutes:number = minute % 60;
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var hoursstr:string = hours < 10 ? '0' + hours.toString() : hours.toString();
        var minutesstr:string = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
        var strTime = hoursstr + ':' + minutesstr + ' ' + ampm;
        return strTime;
    }
    static formatDate(datetime:Date):string {
        var date = datetime.getDate();
        var month = (datetime.getMonth() + 1);
        var datestr = date < 10 ? '0' + date : date;
        var monthstr = month < 10 ? '0' + month : month;
        return monthstr + "/" + datestr + "/" + datetime.getFullYear();
    }
    static isValidTime(time:any):boolean {
        var dateReg = /^(1[012]|0[1-9]):[0-5][0-9](\\s)? (AM|PM)+$/;
        if (!dateReg.test(this.formatTime(new Date(time.toString())))) {
            return false;
        }
        return true;
    }
    static isValidDate(str:any):boolean {
        var comp = this.formatDate(new Date(str.toString())).split('/');
        var m = parseInt(comp[0], 10);
        var d = parseInt(comp[1], 10);
        var y = parseInt(comp[2], 10);
        var date = new Date(y, m - 1, d);
        if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
            return true;
        }
        return false;
    }
    static findObjectByKey(array:any, key:any, value:any):any {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }
    static compareDate(startDate:any,endDate:any):boolean {
        //Note: 00 is month i.e. January 
        var dateOne = new Date(this.formatDate(new Date(startDate.toString()))); //Year, Month, Date 
        var dateTwo = new Date(this.formatDate(new Date(endDate.toString()))); //Year, Month, Date 
        if (dateOne > dateTwo) { 
            return false; 
         }else { 
             return true; 
         }
 
     }
     static compareTime(startTime:any,endTime:any):boolean {
         //Note: 00 is month i.e. January 
         var timeOne = new Date(this.formatDate(new Date())+" "+this.formatTime(new Date(startTime.toString()))); //Year, Month, Date 
         var timeTwo = new Date(this.formatDate(new Date())+" "+this.formatTime(new Date(endTime.toString()))); //Year, Month, Date 
         if (timeOne > timeTwo) { 
             return false; 
          }else { 
              return true; 
          }
  
      }
}
