import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgScormPlayerModule } from 'ng-scorm-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgScormPlayerModule.forChild({ debug: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
