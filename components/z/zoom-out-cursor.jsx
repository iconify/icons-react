import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddd-_cb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddd-_cb2z"/>`,
		"fallback": "mdi:zoom-out-cursor",
	});
}

export default Component;
