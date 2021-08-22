import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from './user.model';

@Component({
  selector: 'app-rxweb-reactive-form',
  templateUrl: './rxweb-reactive-form.component.html',
  styleUrls: ['./rxweb-reactive-form.component.scss']
})
export class RxwebReactiveFormComponent implements OnInit {
  userFormGroup: FormGroup;

  constructor(private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    const user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
