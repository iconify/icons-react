import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1u6t7xfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1u6t7xfr"/>`,
		"fallback": "selfhst:zigbee-dark",
	});
}

export default Component;
