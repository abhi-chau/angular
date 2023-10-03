import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DxButtonModule, DxValidatorComponent } from 'devextreme-angular';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';
import { DxNumberBoxModule } from 'devextreme-angular';
import { DxPopupModule,DxTemplateModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { HttpClientModule } from  '@angular/common/http';

import { DxDateBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxCalendarModule, DxTextAreaModule } from "devextreme-angular";
import { DxTextBoxModule } from 'devextreme-angular';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TabComponent } from './tab/tab.component';
import { DxTabsModule, } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule,} from 'devextreme-angular';
import { Apiservice } from './app.service';
import { DxValidatorModule , DxValidationSummaryModule, } from 'devextreme-angular';
import { DxListModule} from 'devextreme-angular';
import { DxRadioGroupModule, } from 'devextreme-angular';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'section', component: SectionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'formdemo', component: FormdemoComponent },
  { path: 'tab', component: TabComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    SectionComponent,
    FormdemoComponent,
    ParentComponent,
    ChildComponent,
    TabComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxNumberBoxModule,
    RouterModule.forRoot(routes),
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
