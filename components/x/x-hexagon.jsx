import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u55dg3w3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u55dg3w3s"/>`,
		"fallback": "mynaui:x-hexagon",
	});
}

export default Component;
