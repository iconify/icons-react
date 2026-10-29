import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uq6pq445a.css';
import '../../css/y/yrgiqhxka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uq6pq445a"/><path class="wm-a yrgiqhxka"/></g>`,
		"fallback": "withicons:workflow",
	});
}

export default Component;
