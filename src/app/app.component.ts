import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(public sanitizer: DomSanitizer) {
  }

  getSourceURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://test-website-demo-1.s3.us-east-2.amazonaws.com/english/player.html?WorkplaceAntiHarassment/index_lms.html");
}

  ngAfterViewInit(): void {

    //window.onload = function () {
      
   //}

  }

  ngOnInit(): void { }

  test(v) {
    console.log(v);
  }

  return() {
    console.log("dsdsd");
    const receiverWindow = document.getElementById('receiver') as HTMLIFrameElement;
      console.log(receiverWindow.contentWindow);
     receiverWindow.contentWindow.postMessage("helll", "*");

  }

}
