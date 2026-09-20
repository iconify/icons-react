import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct25gz22c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct25gz22c"/>`,
		"fallback": "mdi:wrench-time",
	});
}

export default Component;
