import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    // this.contactForm = this.formBuilder.group({
    //   fullName: [''],
    //   email: [''],
    //   message: ['']
    // });
    this.contactForm = new FormGroup({
      fullName: new FormControl('Kaushik Samanta', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      message: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(15),
      ]))
    });
  }

  onSubmit() {
    console.log('Valid?', this.contactForm.valid); // true or false
    console.log('fullName', this.contactForm.value.fullName);
    console.log('Email', this.contactForm.value.email);
    console.log('Message', this.contactForm.value.message);
  }

}
