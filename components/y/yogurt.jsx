import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cjc-01ypq.css';
import '../../css/j/jv_bwublx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cjc-01ypq"/><path class="jv_bwublx"/></g>`,
		"fallback": "hugeicons:yogurt",
	});
}

export default Component;
