import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbua0obei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbua0obei"/>`,
		"fallback": "mingcute:wreath-fill",
	});
}

export default Component;
