import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from "../profile";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() searchProfile = new EventEmitter<string>();

  username = '';

  submitUser() {
    this.searchProfile.emit(this.username)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
