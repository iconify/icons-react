import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdd7jibvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdd7jibvk"/>`,
		"fallback": "mdi:weight-lifter",
	});
}

export default Component;
