import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: 
  `<p [@myAnimation]='state' (click)="animatePara()">Show me the money!</p> 

  `,  
   
  styles: [`

  p {
      width:400px;
      background:yellow;
      margin: 200px auto;
      text-align:center;
      padding:40px;
      font-size: 2.5em;

  }

   `] ,
  animations:	[

    trigger('myAnimation',[
      state('little', style({
          transform: 'scale(1)',

        })),
      state('large', style({
          transform: 'scale(1.2)',

        })),
      transition('little <=> large', animate('500ms ease-in')),

      ]),

  ]
   
})
export class AppComponent {

  state: string = 'little';

  animatePara() {

    this.state = (this.state === 'little' ? 'large': 'little');

  }
}
