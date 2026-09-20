import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-l9c4vor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-l9c4vor"/>`,
		"fallback": "mynaui:x-triangle",
	});
}

export default Component;
