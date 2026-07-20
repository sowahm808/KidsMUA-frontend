import { Injectable, signal } from '@angular/core';
@Injectable({providedIn:'root'}) export class AccessibilityService{readonly dyslexiaMode=signal(false);readonly largeText=signal(false);readonly reducedMotion=signal(false);apply():void{document.documentElement.classList.toggle('dyslexia-mode',this.dyslexiaMode());document.documentElement.classList.toggle('large-text',this.largeText());}}
