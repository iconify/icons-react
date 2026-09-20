import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l06t19rlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l06t19rlj"/>`,
		"fallback": "mingcute:wifi-fill",
	});
}

export default Component;
