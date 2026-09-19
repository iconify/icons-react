import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1_r-zqlu.css';
import '../../css/y/y0h0debha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1_r-zqlu"/><path class="y0h0debha"/></g>`,
		"fallback": "humbleicons:wifi",
	});
}

export default Component;
