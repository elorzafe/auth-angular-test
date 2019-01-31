import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authAngularTest';
  amplifyService = null;
  constructor( public amplify:AmplifyService) {
    this.amplifyService = amplify;
  }

  login(){
    console.log('login')
    this.amplifyService.auth().signIn("xxxxxxx", "xxxxxxxxxx")
  }
  currentUser(){
    console.log('currentUser')
    this.amplifyService.auth().currentAuthenticatedUser().then(console.log)
  }
}
