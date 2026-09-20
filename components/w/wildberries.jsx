import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o51vhd6du.css';

const viewBox = {"width":500,"height":75.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o51vhd6du"/>`,
		"fallback": "thesvg-color:wildberries",
	});
}

export default Component;
