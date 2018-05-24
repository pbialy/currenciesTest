import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public readonly FORM_CONTROLS = {
    USERNAME: 'userName',
    PASSWORD: 'password'
  };

  public loginDataForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginDataForm = this.formBuilder.group({
      [this.FORM_CONTROLS.USERNAME]: new FormControl('', Validators.required),
      [this.FORM_CONTROLS.PASSWORD]: new FormControl('', Validators.required)
    });
  }

  public hasError(fieldName: string): boolean {
    // const cc = this.loginDataForm;
    // debugger;
    if (this.loginDataForm.errors) {
      console.log(this.loginDataForm.errors);
    };
    return !!this.loginDataForm.errors;
  }

}
