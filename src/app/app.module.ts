import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './components/login/';
import { partialLoader } from './app.localization ';
import { UsersService } from './api/users.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
