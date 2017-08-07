import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class TestService {


  baseUrl = environment.baseUrl;

  constructor(private _http: Http) {
  }

  findAllMessages() {
    console.log(this.baseUrl);
    return this._http.get(this.baseUrl + '/api/test')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  createMessage(message) {
    const obj = {
      message: message
    };
    return this._http.post(this.baseUrl + '/api/test', obj)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  deleteMessage(messageId) {
    return this._http.delete(this.baseUrl + '/api/test/' + messageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}

