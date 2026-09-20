import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx0v8cc_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx0v8cc_e"/>`,
		"fallback": "thesvg-color:zorin",
	});
}

export default Component;
