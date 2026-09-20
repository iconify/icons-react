import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjv8c3k7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjv8c3k7i"/>`,
		"fallback": "uil:web-section",
	});
}

export default Component;
