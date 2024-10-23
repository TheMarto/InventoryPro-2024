import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})


export class NewAccountComponent {
  

//consts
public package: boolean;
public modeAccount: string;
public nameTypePack: string;
public price: number;

constructor(){
  this.package = false;
  this,this.modeAccount = 'demo';
  this.nameTypePack = 'basic';
  this.price = 0;

}
//method for
  newAccount(newAccForm: NgForm){

  }

  newServiceAcc(newSerForm: NgForm){

  }

  disablePackage(){
    this.package =  this.modeAccount === 'demo'
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
}
