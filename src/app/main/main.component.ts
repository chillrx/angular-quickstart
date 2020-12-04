import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
	public user: any;
	public opened = true;

	constructor(
		private router: Router,
		public changeDetectorRef: ChangeDetectorRef
	) {
		this.user = JSON.parse(sessionStorage.getItem('user') || '');
	}

	ngOnInit() { }

	ngOnDestroy(): void {
	}

	public logout() {
		sessionStorage.clear();

		this.router.navigate(['/login']);
	}
}
