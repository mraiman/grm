import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted = false;


  subDefault = 'advanced';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //   }
    // );

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }

  onSubmit2(form: NgForm) {
    console.dir(form);
    console.log(form.value);
  }

  print(m) {
    console.dir(m);
  }

}
