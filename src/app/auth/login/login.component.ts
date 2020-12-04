import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public authForm: FormGroup = new FormGroup({
		email: new FormControl(null),
		password: new FormControl(null)
	});

	constructor(private auth: AuthenticationService, private http: HttpClient) { }

	ngOnInit() { }

	public onLogin(): void {
		this.authForm.disable();

		this.auth.login(this.authForm.value).finally(() => this.authForm.enable());
	}
}
