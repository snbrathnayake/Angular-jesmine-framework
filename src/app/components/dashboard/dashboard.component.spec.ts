import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { partialLoader } from '../../app.localization ';

describe('DashboardComponent', () => {
   // Define variables
   let component: DashboardComponent;
   let fixture: ComponentFixture<DashboardComponent>;
   let debugElement: DebugElement;
   let elementHtml: HTMLElement;
 
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [
         DashboardComponent
       ],
       imports: [
         BrowserModule,
         HttpClientModule,
         TranslateModule.forRoot({
           loader: {
             provide: TranslateLoader,
             useFactory: partialLoader,
             deps: [HttpClient]
           }
         }),
       ],
 
       providers: [
         TranslateService,
         HttpClient
       ]
     }).compileComponents();
   }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
    elementHtml = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
