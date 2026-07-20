import { Component, input } from '@angular/core';
@Component({standalone:true,template:`<article class="card"><h1 class="text-3xl font-bold">{{title()}}</h1><p class="mt-4">{{body()}}</p></article>`})export class StaticPageComponent{title=input('Mind Unlocking Academy');body=input('Production content is managed through approved backend content workflows and localized message files.');}
