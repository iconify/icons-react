import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9hj6xbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9hj6xbnl"/>`,
		"fallback": "mdi:wifi-strength-4-lock",
	});
}

export default Component;
