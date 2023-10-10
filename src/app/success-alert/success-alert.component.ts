import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `
        <p class="mt-1 bg-success text-center">Success Alert</p>
    `,
    styles:[`
    p{
        font-size:24px;
        padding:10px;
        border:1px solid green;
        border-radius:20px;
    }
    `]
})
export class SuccessAlertComponent{
    constructor(){}
}