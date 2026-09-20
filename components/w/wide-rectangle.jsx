import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovfb4w_au.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovfb4w_au"/>`,
		"fallback": "pinhead:wide-rectangle",
	});
}

export default Component;
