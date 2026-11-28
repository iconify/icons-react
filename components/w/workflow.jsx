import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yrjyowgzc.css';
import '../../css/f/fjkxmjlze.css';
import '../../css/q/qjin-bc2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yrjyowgzc"/><path class="fjkxmjlze"/><path class="qjin-bc2l"/></g>`,
		"fallback": "iconaut:workflow",
	});
}

export default Component;
