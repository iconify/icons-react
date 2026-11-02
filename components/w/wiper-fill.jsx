import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8lkv9blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8lkv9blz"/>`,
		"fallback": "mingcute:wiper-fill",
	});
}

export default Component;
