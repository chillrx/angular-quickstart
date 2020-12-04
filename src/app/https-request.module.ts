import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
	private url = environment.api;
	private headers = {
		'Authorization': sessionStorage.getItem('access_token') || '',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	};

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const newReq = req.clone({
			url: this.url + req.url,
			setHeaders: this.headers
		});

		return next.handle(newReq);
	}
}

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpsRequestInterceptor,
			multi: true
		}
	]
})
export class RequestInterceptor { }
