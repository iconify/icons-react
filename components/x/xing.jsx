import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuab06j5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuab06j5t"/>`,
		"fallback": "bxl:xing",
	});
}

export default Component;
