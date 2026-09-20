import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgd7_gbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgd7_gbom"/>`,
		"fallback": "mdi:wifi-strength-off",
	});
}

export default Component;
