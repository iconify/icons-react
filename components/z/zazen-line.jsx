import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnp03ibug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnp03ibug"/>`,
		"fallback": "mingcute:zazen-line",
	});
}

export default Component;
