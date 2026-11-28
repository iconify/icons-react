import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vu3eu34ze.css';
import '../../css/n/ng5-n8bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vu3eu34ze"/><path class="ng5-n8bbb"/></g>`,
		"fallback": "iconaut:zodiac-aquarius-duo",
	});
}

export default Component;
