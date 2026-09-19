import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx6x8mb8q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx6x8mb8q"/>`,
		"fallback": "dinkie-icons:white-medium-star-filled",
	});
}

export default Component;
