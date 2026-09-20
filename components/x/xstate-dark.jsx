import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0hb7q3gd.css';

const viewBox = {"width":800,"height":405};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0hb7q3gd"/>`,
		"fallback": "thesvg-color:xstate-dark",
	});
}

export default Component;
