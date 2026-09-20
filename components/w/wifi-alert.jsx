import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt69m96hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt69m96hj"/>`,
		"fallback": "mdi:wifi-alert",
	});
}

export default Component;
