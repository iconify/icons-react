import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmvunbw0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmvunbw0b"/>`,
		"fallback": "mingcute:za-sort-ascending-letters-fill",
	});
}

export default Component;
