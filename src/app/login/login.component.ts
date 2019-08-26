import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { User } from '../login/user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private page: Page, private userService: UserService) { 
    this.user = new User();
    this.user.email = "my.test.account@nativescript.org";
  this.user.password = "mypassword";
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  
  login() {
    this.userService.login(this.user)
      .subscribe(
        () => {

          setTimeout(() => {
            alert("Your account was successfully Login.");
          }, 10);
          
          // this.toggleDisplay();
          setTimeout(() => {
            this.router.navigate(['/home']);

          }, 2000);
        },
        (err) => {
          alert("Unfortunately we were unable to login your account.")
          console.log(err)
        });
  }
  
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        (err) => {
          alert("Unfortunately we were unable to create your account.")
          console.log(err)
        });
  }

  // onGoogle(){
  //   console.log("login with google")
  // }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
  




//   goBack(){
//     this.router.navigate(['/register']);
// }
// onLogin(){

// }
onReagister(){
  
}
}
