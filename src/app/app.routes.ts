import { CanActivateFn, Routes } from '@angular/router';
import { Templatedrivenforms } from './templatedrivenforms/templatedrivenforms';
import { Reactiveforms } from './reactiveforms/reactiveforms';
import { Tasktemplatedrivenforms } from './tasktemplatedrivenforms/tasktemplatedrivenforms';

export const authGuard:CanActivateFn=(route,state)=>{
    console.log("Auth Guard called");
    return true;//allow access
}
export const routes: Routes = [

    

    {
        path : 'tforms', component : Templatedrivenforms
    } , 

    {
        path : 'rforms' , component : Reactiveforms
    },

    {
        path : 'taskforms' , component : Tasktemplatedrivenforms , canActivate : [authGuard]
    }

    
];


