import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4zutccum.css';
import '../../css/j/jxq-gfbkl.css';
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
		"content": `<g class="ipq1z-bjh"><path class="b4zutccum"/><path class="jxq-gfbkl"/><path class="at0-x07xm"/><path class="w1pxv4b2k"/></g>`,
		"fallback": "solar:widget-3-linear",
	});
}

export default Component;
