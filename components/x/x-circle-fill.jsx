import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6e0m7bry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6e0m7bry"/>`,
		"fallback": "bi:x-circle-fill",
	});
}

export default Component;
