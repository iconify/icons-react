import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p41v2tb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p41v2tb-c"/>`,
		"fallback": "mdi:window-shutter",
	});
}

export default Component;
