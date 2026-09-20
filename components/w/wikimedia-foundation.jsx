import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2l8rhbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2l8rhbrd"/>`,
		"fallback": "thesvg-color:wikimedia-foundation",
	});
}

export default Component;
