import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})


export class NewAccountComponent {
  

//consts
public package: boolean;      // to disable package switch
public modeAccount: string;   //to use in package
public nameTypePack: string;  //change the price
public price: number;         //price of package
public termsCond: boolean;    //we can clic in pay or not
public toastTermCond: boolean;// to toast

constructor(
  private route: Router,
){
  this.package = false;
  this,this.modeAccount = 'demo';
  this.nameTypePack = '';
  this.price = 0;
  this.disablePackage()
  this.termsCond = false;
  this.toastTermCond = false;

}
//method for
  newAccount(newAccForm: NgForm){

  }

  newServiceAcc(newSerForm: NgForm){

  }
  //change disable in package
  disablePackage(){
    this.package =  this.modeAccount === 'demo'
    if(this.modeAccount === 'demo'){
    this.price = 0}
    else{
    this.typePackage()}
  }

  //type of Package and total price with that
  typePackage(){
    switch(this.nameTypePack){  

      case "basicpack": this.price = 10
        break;

      case "professionalpack": this.price = 30
        break;

      case "enterprisepack": this.price = 60
        break;

    }
  }

  //button to pay and submit
  btnpaysubm(){
    if(this.termsCond){
    this.route.navigate(['login'])
    //COMPLETAR CODIGO DE PAGO CON STRIPE Y BACKEND
    }
    //return toast error if we don't trust the terms and conditions
    else{
      console.log(this.toastTermCond)
      this.toastTermCond = true;
      setTimeout(()=>{
        this.toastTermCond = false;
      }, 4000);
      console.log(this.toastTermCond)
    }
  }

  //terms and conditions and we can do clic in pay
  accepTerCon(event: Event){
    const eventElement = event.target as HTMLInputElement;
    this.termsCond = eventElement.checked
  }

  //close the toast
  closeToast(){
    this.toastTermCond = false;
  } 
}
