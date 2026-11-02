import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9u-l8sff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9u-l8sff"/>`,
		"fallback": "mingcute:world-2-line",
	});
}

export default Component;
