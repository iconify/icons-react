import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_r3vkblj.css';
import '../../css/w/wcp5qjbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_r3vkblj"/><path class="wcp5qjbhv"/></g>`,
		"fallback": "andrsrxn:webhook-off",
	});
}

export default Component;
