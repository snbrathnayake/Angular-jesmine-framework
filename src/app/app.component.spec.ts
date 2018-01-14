<<<<<<< HEAD
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement, ElementRef } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
=======
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> master
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { partialLoader } from './app.localization ';
import { TranslateService } from '@ngx-translate/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, Router } from '@angular/router';
import { LoginComponent } from './components/login';
=======
>>>>>>> master

describe('AppComponent', () => {

  // Define variables
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
<<<<<<< HEAD
  let debugElement: DebugElement[];
=======
  let debugElement: DebugElement;
>>>>>>> master
  let elementHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
<<<<<<< HEAD
        AppComponent,
        LoginComponent
      ], imports: [
        CommonModule,
=======
        AppComponent
      ],imports:[
>>>>>>> master
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: partialLoader,
            deps: [HttpClient]
          }
        }),
<<<<<<< HEAD
        RouterTestingModule.withRoutes(
          [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: AppComponent }
          ]
        ),
      ],
      providers: [
=======
      ],
      providers:[
>>>>>>> master
        TranslateService,
        HttpClient
      ]
    }).compileComponents();
  }));


<<<<<<< HEAD
  beforeEach(() => {
=======
  beforeEach(()=>{
>>>>>>> master
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    elementHtml = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
  });

<<<<<<< HEAD
  it('should create the [ APP ]', async(() => {
=======
  it('should create the app', async(() => {
>>>>>>> master
    expect(component).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(elementHtml.querySelector('h1').textContent).toContain('Welcome to ');
<<<<<<< HEAD
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

  it('should have the <app-login>', async(() => {
    elementHtml = fixture.debugElement.nativeElement;
    expect(elementHtml.querySelector('app-login')).not.toBe(null);
  }));


  // xit('should be function', inject([TranslateService], (translate: TranslateService) => {
  //   component.switchLanguage('en');
  //   expect(translate.use('en')).toEqual('en');
  // }));

 
=======
  }));

  it('should have a logo image src path', () => {
    const nodeAttributes = elementHtml.querySelector('img').attributes as NamedNodeMap;
    expect(nodeAttributes.getNamedItem('src').value).toEqual('./assets/images/icon.png');
    console.log(nodeAttributes.getNamedItem('src').value);

  });
>>>>>>> master
});
