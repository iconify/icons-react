import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0_g-seyw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0_g-seyw"/>`,
		"fallback": "carbon:z-axis",
	});
}

export default Component;
