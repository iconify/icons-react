import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofj4p7beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofj4p7beb"/>`,
		"fallback": "ci:wifi-problem",
	});
}

export default Component;
