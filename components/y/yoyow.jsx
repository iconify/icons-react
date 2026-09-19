import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-x0-ybls.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-x0-ybls"/>`,
		"fallback": "cryptocurrency:yoyow",
	});
}

export default Component;
