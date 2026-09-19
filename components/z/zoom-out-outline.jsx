import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro8eodbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro8eodbyd"/>`,
		"fallback": "flowbite:zoom-out-outline",
	});
}

export default Component;
