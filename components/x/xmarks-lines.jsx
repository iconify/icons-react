import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghxzrqcf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghxzrqcf"/>`,
		"fallback": "fa6-solid:xmarks-lines",
	});
}

export default Component;
