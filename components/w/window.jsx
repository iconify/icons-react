import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ke7wmubdw.css';
import '../../css/g/gxks5mb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ke7wmubdw"/><path class="gxks5mb4b"/></g>`,
		"fallback": "iconaut:window",
	});
}

export default Component;
