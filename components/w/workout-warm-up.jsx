import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/za89ow1xt.css';
import '../../css/a/azl73ac5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="za89ow1xt"/><path class="azl73ac5q"/></g>`,
		"fallback": "hugeicons:workout-warm-up",
	});
}

export default Component;
