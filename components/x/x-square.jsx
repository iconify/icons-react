import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu4im6bjt.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/t/tyug84bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu4im6bjt"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="tyug84bqy"/></g>`,
		"fallback": "andrsrxn:x-square",
	});
}

export default Component;
