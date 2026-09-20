import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1h_w7bbm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1h_w7bbm"/>`,
		"fallback": "la:youtube",
	});
}

export default Component;
