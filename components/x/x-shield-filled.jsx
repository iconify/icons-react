import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc9gedb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc9gedb9l"/>`,
		"fallback": "boxicons:x-shield-filled",
	});
}

export default Component;
