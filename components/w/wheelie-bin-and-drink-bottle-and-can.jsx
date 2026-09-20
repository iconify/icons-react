import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoq87o7cm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoq87o7cm"/>`,
		"fallback": "pinhead:wheelie-bin-and-drink-bottle-and-can",
	});
}

export default Component;
