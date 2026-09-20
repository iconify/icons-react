import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq2_2eb3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq2_2eb3n"/>`,
		"fallback": "la:weight-hanging",
	});
}

export default Component;
