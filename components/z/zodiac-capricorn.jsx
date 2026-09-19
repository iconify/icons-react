import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p5r0-w4eu.css';
import '../../css/n/ncu8t5zib.css';
import '../../css/r/rjyn3_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p5r0-w4eu"/><path class="ncu8t5zib"/><path class="rjyn3_b7y"/></g>`,
		"fallback": "hugeicons:zodiac-capricorn",
	});
}

export default Component;
