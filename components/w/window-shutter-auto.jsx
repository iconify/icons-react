import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1hp5lcav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1hp5lcav"/>`,
		"fallback": "mdi:window-shutter-auto",
	});
}

export default Component;
