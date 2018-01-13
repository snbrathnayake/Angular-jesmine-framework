import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { partialLoader } from './app.localization ';
import { routing } from './app.routes';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: partialLoader,
        deps: [HttpClient]
      }
    }),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
