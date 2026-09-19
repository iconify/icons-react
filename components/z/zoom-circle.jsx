import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/x/x29xc6bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="x29xc6bgp"/></g>`,
		"fallback": "hugeicons:zoom-circle",
	});
}

export default Component;
