import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {

  constructor(private fb: FormBuilder) {}
 
  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    });
 
  preview: string = '';

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
}
