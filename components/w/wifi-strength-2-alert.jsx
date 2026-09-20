import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oosyq6bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oosyq6bub"/>`,
		"fallback": "mdi:wifi-strength-2-alert",
	});
}

export default Component;
