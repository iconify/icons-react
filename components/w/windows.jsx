import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo9q2tsch.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo9q2tsch"/>`,
		"fallback": "fa:windows",
	});
}

export default Component;
