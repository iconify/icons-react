import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b-q5lutbx.css';
import '../../css/y/y681t8b5u.css';
import '../../css/a/at0-x07xm.css';
import '../../css/w/w1pxv4b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b-q5lutbx"/><path class="y681t8b5u"/><path class="at0-x07xm"/><path class="w1pxv4b2k"/></g>`,
		"fallback": "solar:widget-3-line-duotone",
	});
}

export default Component;
