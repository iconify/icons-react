import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkyyvxz9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkyyvxz9l"/>`,
		"fallback": "mingcute:za-sort-descending-letters-fill",
	});
}

export default Component;
