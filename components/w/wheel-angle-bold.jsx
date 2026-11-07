import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkv2srbts.css';
import '../../css/g/g47xhxbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkv2srbts"/><path clip-rule="evenodd" class="g47xhxbse"/>`,
		"fallback": "solar:wheel-angle-bold",
	});
}

export default Component;
