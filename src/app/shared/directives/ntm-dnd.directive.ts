import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
	selector: '[ntmDnd]'
})
export class NtmDndDirective {
	files: any;
	@Output() ntmDnd = new EventEmitter();

	@HostBinding('style.background') private background = '#eee';

	constructor() { }

	@HostListener('dragover', ['$event']) public onDragOver(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.background = '#999';
	}
	@HostListener('dragleave', ['$event']) public onDragLeave(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.background = '#eee'
	}
	@HostListener('drop', ['$event']) public onDrop(event: any) {
		event.preventDefault();
		event.stopPropagation();
		this.files = event.dataTransfer.files;
		if (this.files.length > 0) this.background = '#eee'
		this.ntmDnd.emit(this.files);
	}
}
