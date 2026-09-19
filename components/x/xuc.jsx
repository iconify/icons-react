import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8hawcquw.css';
import '../../css/y/y1iis9uvz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i8hawcquw"/><path class="y1iis9uvz"/></g>`,
		"fallback": "cryptocurrency-color:xuc",
	});
}

export default Component;
