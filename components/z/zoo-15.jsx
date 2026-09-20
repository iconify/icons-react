import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_9mhsbey.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_9mhsbey"/>`,
		"fallback": "maki:zoo-15",
	});
}

export default Component;
