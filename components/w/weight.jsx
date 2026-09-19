import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1v3__bro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1v3__bro"/>`,
		"fallback": "fa-solid:weight",
	});
}

export default Component;
