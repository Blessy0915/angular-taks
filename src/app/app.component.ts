import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    constructor(private fb : FormBuilder)
    {

    }

    loginForm = this.fb.group({
        username : [''],
        password : ['']
    })
  

  
  // loginForm = new FormGroup({
    //   username : new FormControl(''),
    //   password : new FormControl('')
    // })
}
