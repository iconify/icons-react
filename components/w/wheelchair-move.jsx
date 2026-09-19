import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0fqe3bxa.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0fqe3bxa"/>`,
		"fallback": "fa6-solid:wheelchair-move",
	});
}

export default Component;
