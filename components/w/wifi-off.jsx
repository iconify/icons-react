import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1_r-zqlu.css';
import '../../css/w/wjrhxrs1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1_r-zqlu"/><path class="wjrhxrs1h"/></g>`,
		"fallback": "humbleicons:wifi-off",
	});
}

export default Component;
