import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk14dmbbe.css';
import '../../css/k/km46x-8as.css';
import '../../css/f/fov68487d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk14dmbbe"/><circle class="km46x-8as"/><path class="fov68487d"/>`,
		"fallback": "circum:wifi-off",
	});
}

export default Component;
