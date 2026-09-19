import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q502dd3pw.css';
import '../../css/u/u6caadb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q502dd3pw"/><path clip-rule="evenodd" class="u6caadb9n"/></g>`,
		"fallback": "gg:webcam",
	});
}

export default Component;
