import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9w0hsbpl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9w0hsbpl"/>`,
		"fallback": "fa7-brands:xing-square",
	});
}

export default Component;
