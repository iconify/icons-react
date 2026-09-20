import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmd-lzd5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmd-lzd5b"/>`,
		"fallback": "mdi:wifi-strength-outline",
	});
}

export default Component;
