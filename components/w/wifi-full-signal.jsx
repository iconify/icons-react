import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/km-pnmbiu.css';
import '../../css/d/dj6u3f3ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="km-pnmbiu"/><path class="dj6u3f3ld"/></g>`,
		"fallback": "hugeicons:wifi-full-signal",
	});
}

export default Component;
