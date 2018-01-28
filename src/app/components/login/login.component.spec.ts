import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService, TranslateModule } from '@ngx-translate/core';
import { partialLoader } from '../../app.localization ';
import { RouterLinkWithHref, Router, RouterModule } from '@angular/router';
import { routing } from '../../app.routes';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let elementHtml: HTMLElement;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.login'));
    elementHtml = debugElement.nativeElement;

    // spy = spyOn(pastebinService, 'addPaste').and.callThrough();
    // ask fixture to detect changes
    fixture.detectChanges();

  });
  afterEach(() => {
    component = null;
    localStorage.removeItem('token');
  });

  it('should create [ LOGIN ]', () => {
    expect(component).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(component.isAuthenticated()).toBeTruthy();
  });

  it('should return attempt count: ', () => {
    const CURRENT_ATTEMPT = 1;
    expect(component.attempTime(CURRENT_ATTEMPT)).toBeGreaterThan(CURRENT_ATTEMPT);
  });

  it('should return auth() name ', () => {
    expect(component.auth('guru').trim()).toContain('auth guru');
  });

  xit('should have a title `Login Application` ', () => {
    component.title = 'Log Application';
    fixture.detectChanges();
    console.log(elementHtml.textContent, '*******');
    expect(elementHtml.textContent).toContain(component.title);
  })

  it('should display the `create login` button', () => {
    //There should a create button in the template
    fixture.detectChanges();
    expect(elementHtml.innerText).toContain("create login");
  });

  xit("should display the username [sameera] when 'Login' is clicked", () => {
    let loginBtn = fixture.debugElement.query(By.css("button"));
    //triggerEventHandler simulates a click event on the button object
    loginBtn.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(elementHtml.innerHTML).toContain("sameera");

  })

  it('should display message : [Event is pop]', () => {
    let evnBtn = fixture.debugElement.query(By.css(".evn"));
    evnBtn.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.message).toEqual("Event is pop");
    // jasmine.log("hello");

  });

  it('should print log to console ', async(() => {
    spyOn(console, 'log');

    component.printDoc();

    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('print doc?');
  }));

  // it('should call Router.navigateByUrl("forms/:id") with the ID of the form', inject([Router], (router: Router) => {
  //   const spy = spyOn(router, 'navigateByUrl');
  //   component.userAuth(true);
  //   const url = spy.calls.first().args[0];
  //   expect(url).toBe('/form/23');
  // }));

  it('should call Router.navigate [/dashboard]', async(() => {

    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.userAuth(true);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);

  }));

});
