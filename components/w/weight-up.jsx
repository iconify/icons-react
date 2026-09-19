import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8df9757n.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8df9757n"/>`,
		"fallback": "si-glyph:weight-up",
	});
}

export default Component;
