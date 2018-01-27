import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }

  public onEditButtonClick(){

    console.log('Edit button has been clicked!');

  }

}
