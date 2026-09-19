import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4iehdv2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4iehdv2y"/>`,
		"fallback": "garden:x-stroke-16",
	});
}

export default Component;
