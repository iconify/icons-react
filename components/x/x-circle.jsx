import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r62amn8ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r62amn8ij"/>`,
		"fallback": "noviair-light:x-circle",
	});
}

export default Component;
