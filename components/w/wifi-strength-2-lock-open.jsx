import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf0o-hxpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf0o-hxpz"/>`,
		"fallback": "mdi:wifi-strength-2-lock-open",
	});
}

export default Component;
