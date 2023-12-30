import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  contactForm: FormGroup;
  emailRegex: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegex)]],
      company: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required]
    })
  }


  onSubmit(){
    if (this.contactForm.value){
      console.log(this.contactForm.value)
      this.contactForm.reset()
    }
  }

}
