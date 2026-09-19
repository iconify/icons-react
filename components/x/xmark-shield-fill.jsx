import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4oy1rbgy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4oy1rbgy"/>`,
		"fallback": "f7:xmark-shield-fill",
	});
}

export default Component;
