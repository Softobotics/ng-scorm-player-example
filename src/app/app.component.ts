import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() {
  }
  ngAfterViewInit(): void {

    window.onload = function () {
      var receiverWindow = document.getElementById('receiver') as HTMLIFrameElement;
      console.log(receiverWindow.contentWindow);
      receiverWindow.contentWindow.postMessage("helll", "https://test-website-demo-1.s3.us-east-2.amazonaws.com");

    }

  }

  ngOnInit(): void { }

  test(v) {
    console.log(v);
  }

  return() {
    console.log();
  }

}
