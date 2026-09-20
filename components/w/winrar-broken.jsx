import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggvk1qb1t.css';
import '../../css/g/ggmp-yh4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ggvk1qb1t"/><path class="ggmp-yh4k"/></g>`,
		"fallback": "solar:winrar-broken",
	});
}

export default Component;
