import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7rb8xakk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7rb8xakk"/>`,
		"fallback": "noviair-light:wifi-info",
	});
}

export default Component;
