import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vljw1kbnm.css';

const viewBox = {"width":504,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vljw1kbnm"/>`,
		"fallback": "zmdi:wifi-off",
	});
}

export default Component;
