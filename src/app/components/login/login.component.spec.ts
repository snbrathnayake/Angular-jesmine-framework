import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement[];
  let elementHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    elementHtml = fixture.debugElement.nativeElement;
   // component = fixture.debugElement.componentInstance;
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
});
