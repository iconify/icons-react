import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe-f4tbyf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe-f4tbyf"/>`,
		"fallback": "lsicon:work-order-info-outline",
	});
}

export default Component;
