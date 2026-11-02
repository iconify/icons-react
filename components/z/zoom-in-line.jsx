import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiigpd9xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiigpd9xm"/>`,
		"fallback": "mingcute:zoom-in-line",
	});
}

export default Component;
