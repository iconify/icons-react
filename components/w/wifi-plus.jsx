import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evrp-f0in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evrp-f0in"/>`,
		"fallback": "mynaui:wifi-plus",
	});
}

export default Component;
