import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghs0_fbmx.css';
import '../../css/z/zya_w1bxn.css';
import '../../css/k/kvyt1cbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ghs0_fbmx"/><rect transform="rotate(-45 26.16 -15.15)scale(1 -1)" class="zya_w1bxn"/><path class="kvyt1cbwc"/></g>`,
		"fallback": "andrsrxn:wifi-edit",
	});
}

export default Component;
