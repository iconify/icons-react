import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqv5abcjb.css';

const viewBox = {"width":376,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqv5abcjb"/>`,
		"fallback": "zmdi:zoom-in",
	});
}

export default Component;
