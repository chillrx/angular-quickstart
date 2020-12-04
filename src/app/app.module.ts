import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './https-request.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RequestInterceptor,
		HttpClientModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
