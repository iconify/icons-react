import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm59u6zwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm59u6zwt"/>`,
		"fallback": "mdi:zip-box-outline",
	});
}

export default Component;
