import { Component, Input, OnChanges,signal, SimpleChange } from '@angular/core';
import { RouterOutlet , RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserApi } from './user-api';
import { Error } from './error';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink , RouterLinkActive, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // providers: [UserApi, Error]   // This is enough to know!!
  // providers : [{ provide: Error, useClass: Error }]
  providers : [{ provide: Error, useValue: Error }]
})
export class App {
  protected readonly title = "AngularFormsValidation"
  x = 0;
  data:any;
   apiData: any;
  constructor(private userApi: UserApi , private errorService: Error) {
    // this.apiData = this.userApi.getUserDetails();
    
  }

  ngOnInit() {
    this.x = 10;
    this.data = new BehaviorSubject<number>(this.x);
    this.apiData = this.userApi.getUserDetails();
  }

  changeData() {
    this.x = this.x + 1;
    this.data.next(this.x );
  }

   @Input() id=200;
 
  ngOnChanges(change:SimpleChange){
    console.log(change);
  }

  errMsg: string = "";
  setError(){
    this.errorService.printError(this.errMsg);
  }

}
