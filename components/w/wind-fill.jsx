import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm33t25yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm33t25yo"/>`,
		"fallback": "keyline-icons:wind-fill",
	});
}

export default Component;
