import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xx7d-7-nr.css';
import '../../css/y/yex7z8qhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xx7d-7-nr"/><path class="yex7z8qhk"/></g>`,
		"fallback": "andrsrxn:wine",
	});
}

export default Component;
