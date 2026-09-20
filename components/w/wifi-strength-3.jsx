import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-7f5pizp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-7f5pizp"/>`,
		"fallback": "mdi:wifi-strength-3",
	});
}

export default Component;
