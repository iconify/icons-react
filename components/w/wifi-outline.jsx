import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chl3e-b8j.css';

const viewBox = {"width":504,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chl3e-b8j"/>`,
		"fallback": "zmdi:wifi-outline",
	});
}

export default Component;
