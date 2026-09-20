import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g5i18qe1o.css';
import '../../css/c/ca0i9ubof.css';
import '../../css/v/vrm2ribsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g5i18qe1o"/><path class="ca0i9ubof"/><path class="vrm2ribsa"/></g>`,
		"fallback": "solar:wind-broken",
	});
}

export default Component;
