

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class TestService {



  constructor(private _http: Http) {
  }

  findAllMessages() {
    console.log('here');
    return this._http.get('http://localhost:3100/api/test')
      .map(
        (res: Response) => {
          const data = res.json();
          console.log(data);
          return data;
        }
      );
  }
  createMessage(message) {
    const obj = {
      message: message
    };
    return this._http.post('http://localhost:3100/api/test', obj)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  deleteMessage(messageId){
    return this._http.delete('http://localhost:3100/api/test/' + messageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}

