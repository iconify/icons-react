import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8l9mjb4m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8l9mjb4m"/>`,
		"fallback": "garden:whatsapp-stroke-12",
	});
}

export default Component;
