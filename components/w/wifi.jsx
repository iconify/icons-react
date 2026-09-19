import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dux_1z-1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dux_1z-1z"/>`,
		"fallback": "charm:wifi",
	});
}

export default Component;
