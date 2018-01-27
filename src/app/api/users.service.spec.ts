import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


import { UsersService } from './users.service';
import { UsersHttpService } from './users-http.service';
import { MockUsers } from '../../resources/mock/users.data.mock';

describe('UsersService', () => {

  let backend: MockBackend;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersHttpService,
        UsersService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,//jsonp
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions],
          // useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
          //   return new Http(backend, defaultOptions);
          // },

        },

      ], imports: [
        HttpModule

      ]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(UsersService);
  });

  it('should be created  [ USER-SERVICE ]', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return users object[]', inject([UsersService], (service: UsersService) => {
  //   return service.getUsers().subscribe(data => {
  //     expect(data).toEqual(MockUsers);
  //   });
  // }));


  it('should return first user id => 1', fakeAsync(() => {

    // backend.connections.subscribe(connection => {
    //   connection.mockRespond(new ResponseOptions({
    //     body: JSON.stringify(MockUsers)
    //   }))
    // })
    // return service.getUsers().subscribe(data => {
    //   expect(data[0].id).toEqual(1);
    // });

    let response = new ResponseOptions({
      body: JSON.stringify(MockUsers)
    });
    const baseResponse = new Response(response);

    backend.connections.subscribe((connection: MockConnection) => connection.mockRespond(baseResponse));
    service.getUsers().subscribe(data => {
      expect(data).toEqual(MockUsers);
      expect(data[0].id).toBe(1);

    });
  }));

});
