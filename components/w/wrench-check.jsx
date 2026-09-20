import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps8-4yx3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps8-4yx3u"/>`,
		"fallback": "mdi:wrench-check",
	});
}

export default Component;
