import { Component, OnInit } from '@angular/core';
import { Message } from './Message';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  messages: Message[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService
      .getMessages()
      .subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

}
