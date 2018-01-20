import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;
    loggedIn = false;

    constructor(private router: Router) {

    }

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response) => {
                this.router.navigate(['/udemy/2/recipes']);
                firebase.auth().currentUser.getToken().then(
                    token => this.token = token
                );
            }
        ).catch(
            error => console.log(error)
            );
    }

    getToken() {
        if (!this.token) {
            firebase.auth().currentUser.getToken().then(
                (response) => {
                    firebase.auth().currentUser.getToken().then(
                        token => this.token = token
                    );
                }
            );
        }
        return this.token;
    }

    isAuthenticatedFire() {
        return this.token != null;
    }

    logoutFire() {
        firebase.auth().signOut();
        this.token = null;
    }
}
