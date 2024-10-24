import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
public toastInvalid: boolean; //true if is invalid the email
public toastMessage: string = '';


constructor(private router: Router){
  this.toastInvalid = false;
}

//method to validate and send the Form to recoverý the password
  forgotPass(newForgForm: NgForm){

    if(!newForgForm.invalid){
    this.router.navigate(['new-password'])
    }
    else{
      this.toastInvalid = true;
      this.toastMessage = 'Invalid email, check it please'
      setTimeout(()=>{
      this.toastInvalid = false;
      this.toastMessage = '';
      }, 4000)
    }
  }

//close the toast error
  closeToast(){
    this.toastInvalid = false;
  }
}
