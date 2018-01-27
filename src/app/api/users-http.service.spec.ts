import { TestBed, inject } from '@angular/core/testing';

import { UsersHttpService } from './users-http.service';
import { HttpModule } from '@angular/http';

describe('UsersHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers: [UsersHttpService]
    });
  });

  it('should be created', inject([UsersHttpService], (service: UsersHttpService) => {
    expect(service).toBeTruthy();
  }));
});
