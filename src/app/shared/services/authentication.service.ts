import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	private httpOptions: any;
	private url = environment.api;

	constructor(private http: HttpClient, private router: Router) { }

	public login = (data: any) =>
		new Promise((resolve, reject) => {
			this.http
				.post(
					this.url,
					{
						client_id: 6,
						client_secret: 'lk9uGnCkFCuFjRNSGLAR0UnaVf1dQIzjsRhmmzWN',
						grant_type: 'password',
						username: data.email,
						password: data.password
					},
					this.httpOptions
				)
				.subscribe((res: any) => {
					if (!res.access_token)
						return reject(); // Error feedback here

					sessionStorage.setItem('access_token', res.token_type + ' ' + res.access_token);
					sessionStorage.setItem('user', JSON.stringify(res.user));

					// Success feedback here

					this.router.navigate(['/main/dashboard']);

					resolve();
				}, (rej: any) =>
					reject() // Error feedback here
				);
		});
}
