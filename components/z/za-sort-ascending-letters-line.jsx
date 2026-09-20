import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyv0nyqej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyv0nyqej"/>`,
		"fallback": "mingcute:za-sort-ascending-letters-line",
	});
}

export default Component;
