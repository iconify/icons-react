import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcrd29b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcrd29b3y"/>`,
		"fallback": "ci:window-code-block",
	});
}

export default Component;
