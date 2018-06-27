import { Component, OnInit, ViewChild, TemplateRef,AfterContentInit } from '@angular/core';
import { GridComponent } from 'src/views/shared/grid/grid.component';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit ,AfterContentInit{
  gridAvailbleDataSource: any;
  availableItems: any[] = [];
  gridAvailbleColumns: any[] = [];
  gridMyDataSource: any;
  myItems: any[] = [];
  gridMyColumns: any[] = [];
  heightGrid:number=200;
  @ViewChild('actionAvailble') actionAvailble: TemplateRef<any>;
  @ViewChild('patientDetail') patientDetail: TemplateRef<any>;
  @ViewChild('actionMy') actionMy: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.gridAvailbleColumns = [
      { Field: "No", Title: "No.", Width: 120 },
      { Title: "Patient", Template: this.patientDetail, Width: 200 },
      { Field: "DrugName", Title: "Drug Name", MinWidth: 250 },
      { Title: "", Width: 100, Template: this.actionAvailble }
    ];
    this.availableItems = [
      { Id: 1, No: "LOP000001", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000002", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "PE_ED", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000003", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Cold Sore", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000004", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000005", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000006", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000007", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },

    ];
    this.gridAvailbleDataSource = {
      data: this.availableItems,
      total: this.availableItems.length
    };

    this.gridMyColumns = [
      { Field: "No", Title: "No.", Width: 105 },
      { Title: "Patient", Template: this.patientDetail, Width: 130 },
      { Field: "DrugName", Title: "Drug Name", MinWidth: 150 },
      { Field: "Status", Title: "Status", Width: 105 },
      { Title: "", Width: 80, Template: this.actionMy }
    ];
    this.myItems = [
      { Id: 1, No: "LOP000001",Status: "Accepted", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Hair loss", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000002",Status: "Waiting for patient to respond", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "PE_ED", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000003",Status: "Patient responded", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Cold Sore", OrderDate: "05/24/2018 8:50 am" },
      { Id: 1, No: "LOP000004",Status: "Approved", PatientName: "Peter Pan", Gender: "Male", Age: "50", Address: "Houston", DrugName: "Cold Sore", OrderDate: "05/24/2018 8:50 am" },
    ];
    this.gridMyDataSource = {
      data: this.myItems,
      total: this.myItems.length
    };
  }
  ngAfterContentInit() {
    var self = this;
    self.heightGrid=jQuery(window).height()-192;
    jQuery(window).resize(function () {
      self.heightGrid=jQuery(window).height()-192;
    });
  }

}
