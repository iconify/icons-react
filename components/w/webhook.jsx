import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sllgv36du.css';
import '../../css/e/e7ko8zb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sllgv36du"/><path class="e7ko8zb9y"/></g>`,
		"fallback": "withicons-retro:webhook",
	});
}

export default Component;
