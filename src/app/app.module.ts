import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing} from './app.routes';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import {ToasterModule} from 'angular2-toaster';
import { SanitizeHtmlPipe } from '../pipe/sanitize-html-pipe';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid'; 
import { InputsModule } from '@progress/kendo-angular-inputs'; 
import { DateInputsModule  } from '@progress/kendo-angular-dateinputs'; 
import { DropDownsModule } from '@progress/kendo-angular-dropdowns'; 
import { UploadModule  } from '@progress/kendo-angular-upload'; 
import { MenuModule } from '@progress/kendo-angular-menu';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';

import { AppComponent } from './app.component';
import { GridComponent } from '../views/shared/grid/grid.component';
import { TextboxComponent } from '../views/shared/inputs/textbox/textbox.component';
import { MaskedTextboxComponent } from '../views/shared/inputs/maskedtextbox/maskedtextbox.component';
import { TextareaComponent } from '../views/shared/inputs/textarea/textarea.component';
import { NumericTextboxComponent } from '../views/shared/inputs/numerictextbox/numerictextbox.component';
import { DropdownlistComponent } from '../views/shared/dropdowns/dropdownlist/dropdownlist.component';
import { LookupComponent } from '../views/shared/dropdowns/lookup/lookup.component';
import { AutocompleteComponent } from '../views/shared/dropdowns/autocomplete/autocomplete.component';
import { DatepickerComponent } from '../views/shared/dateinputs/datepicker/datepicker.component';
import { DaterangeComponent } from '../views/shared/dateinputs/daterange/daterange.component';
import { TimepickerComponent } from '../views/shared/dateinputs/timepicker/timepicker.component';
import { UploadComponent } from '../views/shared/uploads/upload/upload.component';

import { HeaderComponent } from '../views/shared/header/header.component';
import { FooterComponent } from '../views/shared/footer/footer.component';
import { SidebarComponent } from '../views/shared/sidebar/sidebar.component';

import { UserComponent } from '../views/user/user.component';
import { UserCreateComponent } from '../views/user/create/create.component';
import { UserUpdateComponent } from '../views/user/update/update.component';
import { UserSharedComponent } from '../views/user/shared/shared.component';
import { AvailableCaseComponent } from './views/available-case/available-case.component';
import { MyCaseComponent } from './views/my-case/my-case.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MyCaseDetailComponent } from './views/my-case-detail/my-case-detail.component';
import { AvailableCaseDetailComponent } from './views/available-case-detail/available-case-detail.component';
import { CaseQuestionComponent } from './views/case-question/case-question.component';
import { CasePhotoComponent } from './views/case-photo/case-photo.component';
import { CaseMessageComponent } from './views/case-message/case-message.component';





@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GridComponent,
    TextboxComponent,
    MaskedTextboxComponent,
    TextareaComponent,
    NumericTextboxComponent,
    DropdownlistComponent,
    LookupComponent,
    AutocompleteComponent,
    DatepickerComponent,
    DaterangeComponent,
    TimepickerComponent,
    UploadComponent,
    
    UserComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserSharedComponent,
    AvailableCaseComponent,
    MyCaseComponent,
    DashboardComponent,
    MyCaseDetailComponent,
    AvailableCaseDetailComponent,
    CaseQuestionComponent,
    CasePhotoComponent,
    CaseMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServicesModule,
    HttpModule,
    HttpClientModule,
    ToasterModule,
    routing,
    ButtonsModule,
    GridModule,
    BrowserAnimationsModule,
    InputsModule,
    DropDownsModule ,
    DateInputsModule,
    UploadModule,
    MenuModule,
    LayoutModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
