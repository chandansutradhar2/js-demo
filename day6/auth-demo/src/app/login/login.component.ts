import { Component, OnInit } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  AuthProvider,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {
    const app = initializeApp({
      apiKey: 'AIzaSyBbhQTIvXpDsGlBoibrSuBzN8Gc3F_SHS0',
      authDomain: 'cloud-computing-3fda3.firebaseapp.com',
      projectId: 'cloud-computing-3fda3',
      storageBucket: 'cloud-computing-3fda3.appspot.com',
      messagingSenderId: '513190930919',
      appId: '1:513190930919:web:1c1195a2fd6c759db17542',
      measurementId: 'G-ZV6E91P67F',
    });
  }

  ngOnInit(): void {}

  login(email: string, password: string) {
    alert(email + ' ' + password);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert('login success');
      })
      .catch((err) => {
        alert(err);
      });
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        alert('login success with google for user' + result.user.email);
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  }

  signUp() {
    //  createUserWithEmailAndPassword(auth, email, password)
    //    .then((userCredential: { user: any }) => {
    //      // Signed in
    //      const user = userCredential.user;
    //      // ...
    //      alert('sign in success');
    //    })
    //    .catch((error) => {
    //      const errorCode = error.code;
    //      const errorMessage = error.message;
    //      // ..
    //      console.log(error);
    //    });
  }
}
