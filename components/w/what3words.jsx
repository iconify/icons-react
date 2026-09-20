import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twomk51ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twomk51ry"/>`,
		"fallback": "thesvg:what3words",
	});
}

export default Component;
