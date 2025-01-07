import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DxButtonModule} from 'devextreme-angular';
import { DxNumberBoxModule } from 'devextreme-angular';
import { DxPopupModule,DxTemplateModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { HttpClientModule } from  '@angular/common/http';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxCalendarModule, DxTextAreaModule } from "devextreme-angular";
import { DxTextBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxTabsModule, } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule,} from 'devextreme-angular';
import { Apiservice } from './app.service';
import { DxValidatorModule , DxValidationSummaryModule, } from 'devextreme-angular';
import { DxListModule} from 'devextreme-angular';
import { DxRadioGroupModule, } from 'devextreme-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { CrudPageComponent } from './crud-page/crud-page.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    CrudPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxNumberBoxModule,
    DxPopupModule,
    ReactiveFormsModule,
    FormsModule,
    DxTemplateModule,
    DxFormModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxCalendarModule,
    DxTextAreaModule,
    DxTextBoxModule ,
    FormsModule,
    DxTabsModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxAccordionModule,
    DxCheckBoxModule,
    DxSliderModule,
    DxTagBoxModule,
    HttpClientModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxListModule,
    DxRadioGroupModule
  ],
  providers: [Apiservice],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
