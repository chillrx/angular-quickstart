import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{
				path: 'menu',
				component: MenuComponent,
				children: [ { path: ':id', component: MenuComponent } ]
			}
		]
	},
	{ path: '**', redirectTo: 'dashboard' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MainRoutingModule {}
