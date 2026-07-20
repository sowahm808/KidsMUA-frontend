import { AbstractControl, ValidationErrors } from '@angular/forms';
const prohibited=['address','phone number','secret'];
export function noProhibitedContent(control:AbstractControl<string>):ValidationErrors|null{const value=(control.value??'').toLowerCase();return prohibited.some(term=>value.includes(term))?{prohibitedContent:true}:null;}
