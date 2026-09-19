import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlbdts9qu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlbdts9qu"/>`,
		"fallback": "game-icons:wind-hole",
	});
}

export default Component;
