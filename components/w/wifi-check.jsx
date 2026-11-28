import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3ak1yb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3ak1yb2l"/>`,
		"fallback": "noviair-light:wifi-check",
	});
}

export default Component;
