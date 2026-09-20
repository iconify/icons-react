import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_3q33btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_3q33btz"/>`,
		"fallback": "mdi:wifi-strength-0-lock",
	});
}

export default Component;
