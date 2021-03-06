
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, ElementRef } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { partialLoader } from './app.localization ';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login';


describe('AppComponent', () => {

  // Define variables
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement[];
  let elementHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule,
        RouterModule,
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

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    elementHtml = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;


    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(elementHtml.querySelector('h1').textContent).toContain('Welcome to ');

  }));

  it('should have a logo image src path [`/assets/images/icon.png`]', () => {
    const nodeAttributes = elementHtml.querySelector('img').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('src').value).toEqual('./assets/images/icon.png');

  });

  it('should contains href links', () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
    expect(href).toEqual('https://facebook.com');
  });

  it('should have a href All <a>', () => {
    const attList = elementHtml.querySelectorAll('a');
    // let href = fixture.debugElement.querySelector(By.css('a')).nativeElement.getAttribute('href');
    expect(attList[0].getAttribute('href')).toEqual('https://facebook.com');
    expect(attList[1].getAttribute('href')).toEqual('https://www.google.lk/?gws_rd=ssl');
  });


  xit('should go to href url [`https://facebook.com`]', async(inject([Router, Location], (router: Router, location: Location) => {
    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      // expect(location.path()).toEqual('/welcome');
    });
  })));

  xit('should have a link to [/login]', () => {
    debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElement.findIndex(de => { return de.properties['href'] === '/login'; });
    expect(index).toBeGreaterThan(-1);
  });

  xit('should have the <app-login>', async(() => {
    elementHtml = fixture.debugElement.nativeElement;
    expect(elementHtml.querySelector('app-login')).not.toBe(null);
  }));

  it('should have a logo image src path', () => {
    const nodeAttributes = elementHtml.querySelector('img').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('src').value).toEqual('./assets/images/icon.png');
    console.log(nodeAttributes.getNamedItem('src').value);

  });

});
