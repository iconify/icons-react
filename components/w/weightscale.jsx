import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4_n57b9h.css';

const viewBox = {"width":1026,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4_n57b9h"/>`,
		"fallback": "whh:weightscale",
	});
}

export default Component;
