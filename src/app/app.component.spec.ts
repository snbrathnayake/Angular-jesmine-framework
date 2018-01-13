import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { partialLoader } from './app.localization ';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {

  // Define variables
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let elementHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],imports:[
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
      providers:[
        TranslateService,
        HttpClient
      ]
    }).compileComponents();
  }));


  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    elementHtml = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(elementHtml.querySelector('h1').textContent).toContain('Welcome to ');
  }));

  it('should have a logo image src path', () => {
    const nodeAttributes = elementHtml.querySelector('img').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('src').value).toEqual('./assets/images/icon.png');
    console.log(nodeAttributes.getNamedItem('src').value);

  });
});
