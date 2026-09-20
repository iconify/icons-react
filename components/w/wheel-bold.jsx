import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg9j96obh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wg9j96obh"/>`,
		"fallback": "solar:wheel-bold",
	});
}

export default Component;
