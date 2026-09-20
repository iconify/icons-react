import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxr1tjb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxr1tjb9p"/>`,
		"fallback": "mdi:yeast",
	});
}

export default Component;
