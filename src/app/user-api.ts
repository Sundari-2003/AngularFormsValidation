import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApi {
    getUserDetails(){
        return {name:'Sundari', email:'sundari@example.com'};
    }
}
