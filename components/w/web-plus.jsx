import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijn9zot8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijn9zot8c"/>`,
		"fallback": "mdi:web-plus",
	});
}

export default Component;
