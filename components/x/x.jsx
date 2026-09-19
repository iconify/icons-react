import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wozg3fb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wozg3fb-h"/>`,
		"fallback": "griddy-icons:x",
	});
}

export default Component;
