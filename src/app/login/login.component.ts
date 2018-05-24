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
    return this.loginDataForm.get(fieldName).touched && !!this.loginDataForm.get(fieldName).errors;
  }


  public triggerLogin(): void {
    this.touchAllFields();
    if (this.loginDataForm.valid) {
      Object.keys(this.FORM_CONTROLS).forEach(key => {
        sessionStorage.setItem(
          this.FORM_CONTROLS[key],
          this.loginDataForm.value[this.FORM_CONTROLS[key]]
        );
      });
    }
  }

  private touchAllFields(): void {
    Object.keys(this.FORM_CONTROLS).forEach(key => {
      this.loginDataForm.get(this.FORM_CONTROLS[key]).markAsTouched();
    });
  }

}
