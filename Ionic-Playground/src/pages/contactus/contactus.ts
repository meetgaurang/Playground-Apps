import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'page-contactus',
    templateUrl: 'contactus.html'
})
export class ContactUsPage {
    contactForm: FormGroup;
    submitAttempt: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.contactForm = this.formBuilder.group({
            name: ["", Validators.required],
            gender: ["", Validators.required],
            description:[]
        });
    }

    submitContactForm() {
        this.submitAttempt = true;
        console.log(this.contactForm);
    }
}