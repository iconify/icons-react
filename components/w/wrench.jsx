import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5zp9z6sz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5zp9z6sz"/>`,
		"fallback": "simple-line-icons:wrench",
	});
}

export default Component;
