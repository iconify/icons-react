import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qalri0_ra.css';
import '../../css/w/wx3_h_fnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qalri0_ra"/><path class="wx3_h_fnd"/></g>`,
		"fallback": "hugeicons:zakat",
	});
}

export default Component;
