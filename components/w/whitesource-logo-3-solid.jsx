import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tunstabwc.css';
import '../../css/f/fauj1-0cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tunstabwc"/><path class="fauj1-0cx"/></g>`,
		"fallback": "streamline-logos:whitesource-logo-3-solid",
	});
}

export default Component;
