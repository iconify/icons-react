import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwi0_l9lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwi0_l9lh"/>`,
		"fallback": "mdi:wifi-strength-1",
	});
}

export default Component;
