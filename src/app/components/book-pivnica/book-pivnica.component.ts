import { Component,  OnInit,  ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-pivnica',
  templateUrl: './book-pivnica.component.html',
  styleUrls: ['./book-pivnica.component.scss']
})

export class BookPivnicaComponent implements OnInit {

message: boolean = false;
  form!: FormGroup;


ngOnInit() {
  this.form = new FormGroup ( {
    firstname: new FormControl(null, Validators.required, ),
    lastname: new FormControl('', Validators.required),
    organization: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    area: new FormControl ('', Validators.required),
    datestart: new FormControl('',Validators.required ),
    dateend: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),
  
  
  
  
  })
}


constructor() { }
  onClickSubmit(form: FormGroup) {
    console.log('unutra')
    // this.submitted = true;
    // this.event.firstname = this.userform.value.firstname
    // this.event.lastname = this.userform.value.lastname
    localStorage.setItem('Book-Pivnica-Form', JSON.stringify(form));
    let eventData = localStorage.getItem('Book-Pivnica-Form');
this.form.reset();
  this.message = true;
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

