import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx3-z3b_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx3-z3b_q"/>`,
		"fallback": "la:wpexplorer",
	});
}

export default Component;
