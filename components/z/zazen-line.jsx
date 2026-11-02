import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9zs06bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9zs06bbo"/>`,
		"fallback": "mingcute:zazen-line",
	});
}

export default Component;
