import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwp02941m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwp02941m"/>`,
		"fallback": "griddy-icons:xing",
	});
}

export default Component;
