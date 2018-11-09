import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      id: [''],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.addMessage(this.messageForm.controls['id'].value, this.messageForm.controls['content'].value)

    this.success = true;
  }

  addMessage(id, content) {

    console.log("id : " + id);
    console.log("content : " + content);

    this.dataService.addMessage(id, content);
  }
}
