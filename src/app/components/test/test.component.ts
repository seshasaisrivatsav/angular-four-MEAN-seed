import { Component, OnInit, Injectable } from '@angular/core';
import {TestService} from '../../services/test.service.client';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _testService: TestService) { }


  alertMessage: Boolean = false;
  successMessage: Boolean = false;
  message: String;
  messages: any[] = [];
  ngOnInit() {
    this.findAllMessages();
  }
  findAllMessages() {
    return this._testService.findAllMessages()
      .subscribe(
        (data: any) => {
          this.messages = data;
        }
      );
  }
  createMessage() {
    return this._testService.createMessage(this.message)
      .subscribe(
        (data: any) => {
          this.successMessage = true;
          this.ngOnInit();
          this.message = null;
        }
      );
  }
  deleteMessage(messageId) {
    return this._testService.deleteMessage(messageId)
      .subscribe(
        (data: any) => {
          this.successMessage = true;
          this.ngOnInit();
        }
      );
  }

}
