import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jft04mbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jft04mbyf"/>`,
		"fallback": "mdi:windsock",
	});
}

export default Component;
