import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgScormPlayerService,NgScormPlayerConfig, ScormResult } from 'ng-scorm-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {





  constructor(private player:NgScormPlayerService,private scormPlayerConfig:NgScormPlayerConfig) {

    this.scormPlayerConfig.debug = true;

  }

  ngOnInit(): void {
    // var settings = {}

    // window['API_1484_11'] = new Scorm2004API(settings);

    console.log(this.player.Initialize())
    console.log(this.player)
    this.player.initializeEvent.subscribe(val => { console.log('initializeEvent:', val); });
    this.player.setValueEvent.subscribe(val => { console.log('setValueEvent:', val); });
    this.player.getValueEvent.subscribe(val => { console.log('getValueEvent:', val); });
    this.player.finishEvent.subscribe(val => { console.log('finishEvent:', val); });
    this.player.commitEvent.subscribe(val => { console.log('commitEvent:', val); });

    console.log(this.player);

  }

  title = 'scrom-example';

  test(v) {
    console.log(v);
  }

  return() {
    
    console.log();

    //console.log(this.player.scormResult.completed);

    this.player.LMSSetValue('cmi.location',"index.html#/lessons/ULOj6a2CsceBLYt9wSapWh6fOr-_RT_-");
   // this.player.LMSSetValue('cmi.suspend.data',
    //   '{"v":1,"d":[123,34,112,114,111,103,114,101,115,115,34,58,256,108,263,115,111,110,265,267,34,48,266,256,99,266,49,44,257,281,48,48,283,105,278,276,290,280,58,282,34,289,275,277,275,293,49,125,303,283,49,292,281,288,290,299,279,281,303,125,283,50,307,294,315,34,51,318,295,297,256,311,34,301,314,283,52,323,309,298,323,330,34,53,333,296,310,336,304,34,54,340,325,291,300,313,344,55,347,342,350,319,344,56,354,335,356,302,344,57,360,326,343,320,49,327,301,334,367,362,337,49,306,362,373,349,312,357,369,317,379,341,361,382,363,369,322,386,348,371,351,369,332,393,355,389,376,339,399,388,328,396,305,346,404,374,401,344,49,353,410,381,406,383,413,290,112,266,54,380,395,294,425,368,305,290,325,344,385,256,432,320,392,435,278,344,398,439,267,344,409,443,123,358,431,440,369,327,436,305,378,447,413,434,387,448,391,450,444,397,463,461,305,403,457,369,446,460,413,415,470,337,422,294,51,303]}'

    // );
  }

}
