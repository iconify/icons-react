import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq7ftrb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq7ftrb8d"/>`,
		"fallback": "fa-brands:yahoo",
	});
}

export default Component;
