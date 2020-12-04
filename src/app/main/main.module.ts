import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { OnlyNumberDirective } from './../shared/directives/only-number.directive';
import { NtmDndDirective } from '../shared/directives/ntm-dnd.directive';
import { MdToHTMLPipe } from '../shared/pipes/md-to-html.pipe';
import { LoadingComponent } from '../shared/components/loading/loading.component';

// Components
const COMPONENTS = [MainComponent, DashboardComponent, MenuComponent, LoadingComponent];

// Dialogs
const DIALOGS: Array<any> = [];

// Directives
const DIRECTIVES = [OnlyNumberDirective, NtmDndDirective];

// Pipes
const PIPES: Array<any> = [MdToHTMLPipe];

// Modules
const MODULES: Array<any> = [];

// Services

const SERVICES: Array<any> = [];

// Guards

const GUARDS: Array<any> = [];

@NgModule({
	declarations: [...COMPONENTS, ...DIALOGS, ...DIRECTIVES, ...PIPES],
	imports: [CommonModule, MainRoutingModule, ...MODULES],
	providers: [...SERVICES, ...GUARDS],
	entryComponents: [...DIALOGS]
})
export class MainModule { }
