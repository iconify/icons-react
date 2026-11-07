import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fg21p6bqy.css';
import '../../css/r/rycsq4bbm.css';
import '../../css/x/xw09-ubbu.css';
import '../../css/c/cviyaybdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fg21p6bqy"/><path class="rycsq4bbm"/><path class="xw09-ubbu"/><path class="cviyaybdx"/></g>`,
		"fallback": "solar:widget-6-broken",
	});
}

export default Component;
