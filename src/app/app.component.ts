import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgScormPlayerService } from 'ng-scorm-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 

  constructor(private player: NgScormPlayerService, private sanitizer: DomSanitizer) {

   
  }

  ngOnInit(): void {
    this.player.initializeEvent.subscribe(val => { console.log('initializeEvent:', val); });
    this.player.initializeEvent.subscribe(val => { console.log('initializeEvent:', val); });
    this.player.setValueEvent.subscribe(val => { console.log('setValueEvent:', val); });
    this.player.getValueEvent.subscribe(val => { console.log('getValueEvent:', val); });
    this.player.finishEvent.subscribe(val => { console.log('finishEvent:', val); });
    this.player.commitEvent.subscribe(val => { console.log('commitEvent:', val); });
  }

  title = 'scrom-example';

  test(v) {
    console.log(v);
  }

}
