import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fk0gjbbdc.css';
import '../../css/v/vs9m2pvfm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fk0gjbbdc"/><path class="vs9m2pvfm"/></g>`,
		"fallback": "streamline-color:wheelchair-1-flat",
	});
}

export default Component;
