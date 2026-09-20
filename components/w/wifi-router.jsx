import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ai68bqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ai68bqm"/>`,
		"fallback": "streamline:wifi-router",
	});
}

export default Component;
