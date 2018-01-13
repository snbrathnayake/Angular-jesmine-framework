import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';


export function partialLoader(http: HttpClient , path: string ) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}