import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qfhqr_bah.css';
import '../../css/y/yy0-rv1wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qfhqr_bah"/><path class="yy0-rv1wz"/></g>`,
		"fallback": "solar:win-rar-broken",
	});
}

export default Component;
