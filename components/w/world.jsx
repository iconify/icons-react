import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld-l217ao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld-l217ao"/>`,
		"fallback": "subway:world",
	});
}

export default Component;
