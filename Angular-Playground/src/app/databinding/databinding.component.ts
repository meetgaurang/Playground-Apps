import { Component } from '@angular/core';

@Component({
    templateUrl: './databinding.html'
})
export class DataBinding {
    name: string;

    constructor() {
        this.name = "Helow World!!";
    }

    sayHello() {
        alert("Hello there!");
    }
}