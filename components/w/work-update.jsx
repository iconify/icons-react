import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vn03vccwq.css';
import '../../css/f/fgm9jt_mb.css';
import '../../css/w/w0_maub0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vn03vccwq"/><path class="fgm9jt_mb"/><path class="w0_maub0i"/></g>`,
		"fallback": "hugeicons:work-update",
	});
}

export default Component;
