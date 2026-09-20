import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpwh28blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpwh28blh"/>`,
		"fallback": "mingcute:za-sort-descending-letters-line",
	});
}

export default Component;
