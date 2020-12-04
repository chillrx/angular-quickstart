import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';

@Pipe({
	name: 'mdToHTML'
})
export class MdToHTMLPipe implements PipeTransform {
	transform(value: string): string {
		return marked(value);
	}
}
