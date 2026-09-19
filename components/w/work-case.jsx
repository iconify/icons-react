import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrq4ddb6o.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrq4ddb6o"/>`,
		"fallback": "ps:work-case",
	});
}

export default Component;
