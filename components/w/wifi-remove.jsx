import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcn2f7bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcn2f7bmz"/>`,
		"fallback": "mdi:wifi-remove",
	});
}

export default Component;
