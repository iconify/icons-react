import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j99gob0mc.css';
import '../../css/d/ds05-6f5u.css';
import '../../css/c/co65krbus.css';
import '../../css/b/bqkk0cclt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j99gob0mc"/><path class="ds05-6f5u"/><path class="co65krbus"/><path class="bqkk0cclt"/></g>`,
		"fallback": "iconaut:wrap-text",
	});
}

export default Component;
