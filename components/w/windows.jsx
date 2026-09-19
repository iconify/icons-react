import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp5rlobyz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp5rlobyz"/>`,
		"fallback": "fa6-brands:windows",
	});
}

export default Component;
