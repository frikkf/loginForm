import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('goState', [
    state('unSubmitted', style({
      transform: 'scale(1)',
      backgroundPosition:'100% 0%'
    })),
    state('submitted',   style({
      color: '#FFFFFF',
      transform: 'scale(1.2)',
      backgroundPosition:'0% 100%'
    })),
    transition('unSubmitted => submitted', animate('500ms ease-in-out')),
    transition('submitted => unSubmitted', animate('500ms ease-in-out'))
  ]),
  trigger('goButtonHover', [
    
    state('unhover', style({
    })),
    state('hover', style({
      color: '#ED2553',
      borderColor: '#ED2553',
    })),
    transition('hover => *', animate('500ms ease-in-out')),
    transition('* => hover', animate('500ms ease-in-out'))
  ])
]
})
export class AppComponent {
  title = 'app';

  goForm: any = {
    state: 'unSubmitted',
    goButtonText:'',
    goButtonHover: 'unhover',
    goButtonBackgroundExpanse: ''
  }
  

  ngOnInit() {
    this.goForm.goButtonText = 'GO';
  }

  goToggle() {
    //console.log("GO");
    //console.log(this.goForm.goButtonText.length);
    if(this.goForm.goButtonText == ''){
      this.goForm.goButtonText = 'GO';
      this.goForm.state = 'unSubmitted';
    }else {
      this.goForm.goButtonText = '';
      this.goForm.state = 'submitted';
    }
    
  }

  goButtonHover(action: string) {
    if(this.goForm.state == 'submitted') {
      this.goForm.goButtonHover = 'hover';
    }else {
      if(action == 'hover') {
        this.goForm.goButtonHover = 'hover';
      }else if(action == 'unhover') {
        this.goForm.goButtonHover = 'unhover';
      }
    }
  }

  clickPosition($event) {
    console.log($event);
    //const clientX = $event.clientX;
    //const clientY = $event.clientY;
    const clientX = $event.offsetX;
    const clientY = $event.offsetY;
   // const clientX = 0;
    //const clientY = 0;
    this.goForm.goButtonBackgroundExpanse = 'click-effect';
    //this.goForm.goButtonBackgroundPosition = '{top:'+clientY+'; left:'+clientX+'}';
    this.goForm.goButtonBackgroundPositionX = clientX-25;
    this.goForm.goButtonBackgroundPositionY = clientY-25;
    console.log(clientX,clientY);
  } 
}
