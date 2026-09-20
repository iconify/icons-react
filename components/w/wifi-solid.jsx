import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q78h75nsj.css';
import '../../css/w/wlug79bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q78h75nsj"/><path class="wlug79bsu"/>`,
		"fallback": "pixel:wifi-solid",
	});
}

export default Component;
