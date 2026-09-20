import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsoc7jbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsoc7jbhe"/>`,
		"fallback": "mdi:wifi-strength-4",
	});
}

export default Component;
