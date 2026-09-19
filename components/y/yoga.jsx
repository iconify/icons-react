import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw054bb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw054bb7e"/>`,
		"fallback": "guidance:yoga",
	});
}

export default Component;
