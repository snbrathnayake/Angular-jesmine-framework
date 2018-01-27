import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MockUsers } from '../../resources/mock/users.data.mock';
import { ResponseOptions } from '@angular/http';

/**
 * return mock json() data
 * used for instead of user-http-service (not calling to actual backend)
 * act as fake backend api
 * 
 * UsersHttpService | UsersHttpServiceMock
 */
export class UsersHttpServiceMock {


   // get() {return Observable.of(MockUsers); } Mock Option 1 

// Mock Option  2
    get() {
        let response = new ResponseOptions({
            body: JSON.stringify(MockUsers)
        });
        return Observable.of(new Response(response));
    }
}