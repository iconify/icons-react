import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qgu7_ebsb.css';
import '../../css/k/kva043bzk.css';
import '../../css/t/t26d7g3rg.css';
import '../../css/p/pf1ifwbeb.css';
import '../../css/y/y-9fctbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qgu7_ebsb"/><path class="kva043bzk"/><path class="t26d7g3rg"/><path class="pf1ifwbeb"/><path class="y-9fctbqs"/></g>`,
		"fallback": "solar:webcam-linear",
	});
}

export default Component;
