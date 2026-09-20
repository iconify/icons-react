import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y17f7bdea.css';
import '../../css/y/yp_pvo-oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y17f7bdea"/><path class="yp_pvo-oy"/></g>`,
		"fallback": "streamline-sharp:zoom-document",
	});
}

export default Component;
