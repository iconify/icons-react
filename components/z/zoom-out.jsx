import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry0q1bu3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry0q1bu3e"/>`,
		"fallback": "ix:zoom-out",
	});
}

export default Component;
