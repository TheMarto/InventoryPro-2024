import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

//consts
  public noSamePass: boolean = false;     //see toast error
  public textpass: string = 'password';   //change between see points or text on inputs
  public toastMessageNewPass: string = '';//text for toast
  public samePass: boolean = false;       //see toast success


  constructor(
    private router: Router
  ){}

//method for non-same password or navigate and change
  changePass(chPassForm: NgForm){
    const passChang = chPassForm.value.pass;
    const reppassChang = chPassForm.value.reppass;
    console.log('pass1=' + passChang + 'and pass2=' + reppassChang)

    if(passChang == reppassChang){
      this.samePass = true;
      this.toastMessageNewPass = 'success to changed password, now you can login...';
      setTimeout(()=>{
        this.samePass = false;
        this.toastMessageNewPass = '';
        this.router.navigate(['login']);
      },4000);
      
    }
    else{
      this.noSamePass = true;
      this.toastMessageNewPass = 'non-matching passwords'
      setTimeout(()=>{
        this.noSamePass = false;
        this.toastMessageNewPass =''
      },
      4000)
    }
  }

  //view the password
  viewPassFun(event: Event){
    const viewPassCons = event.target as HTMLInputElement;
    if(viewPassCons.checked){
      this.textpass = 'text';
    }
    else{
      this.textpass = 'password';
    }
  }

  //close toast
  closeToast(){
    this.noSamePass = false;
    this.samePass = false;
  }

}
