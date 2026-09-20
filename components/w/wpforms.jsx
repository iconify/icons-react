import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub0qy8b0x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub0qy8b0x"/>`,
		"fallback": "la:wpforms",
	});
}

export default Component;
