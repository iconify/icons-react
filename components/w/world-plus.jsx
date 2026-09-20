import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tih9fbbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tih9fbbcr"/>`,
		"fallback": "mdi:world-plus",
	});
}

export default Component;
