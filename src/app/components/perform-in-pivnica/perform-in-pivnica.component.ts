import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-perform-in-pivnica',
  templateUrl: './perform-in-pivnica.component.html',
  styleUrls: ['./perform-in-pivnica.component.scss']
})
export class PerformInPivnicaComponent implements OnInit{
  message: boolean = false;
  form!: FormGroup;
  addClass:boolean = true;
ngOnInit() {
  this.form = new FormGroup ( {
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl('', Validators.required),
    organization: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    area: new FormControl ('', Validators.required),
    datestart: new FormControl('',Validators.required ),
    dateend: new FormControl('',Validators.required),
    Link: new FormControl('',Validators.required),
  
  
  
  
  });
};


constructor() { }

onClickSubmit(form: FormGroup) {
  localStorage.setItem('Book-Pivnica-Form', JSON.stringify(form));
  let eventData = localStorage.getItem('Book-Pivnica-Form');
this.form.reset();
this.message = true;
this.addClass = false;

    setTimeout(() => {
        if(this.message) {
          this.message = false;

        };

      }, 3000 );

 };
 noSpaceAllowed(control: FormControl) {
   if(control.value != null && control.value.indexOf(' ')!= -1) {
    return {noSpaceAllowed: true}
   }
   return null;
 }
  };


