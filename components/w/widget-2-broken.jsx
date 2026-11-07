import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evib1nbfc.css';
import '../../css/i/iurcs7brt.css';
import '../../css/d/djqs5cxtc.css';
import '../../css/q/qlfd6-bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="evib1nbfc"/><path class="iurcs7brt"/><path class="djqs5cxtc"/><path class="qlfd6-bzg"/></g>`,
		"fallback": "solar:widget-2-broken",
	});
}

export default Component;
