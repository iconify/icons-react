import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y72i1swld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y72i1swld"/>`,
		"fallback": "mingcute:wifi-off-fill",
	});
}

export default Component;
