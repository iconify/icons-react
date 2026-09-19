import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye5r14bki.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye5r14bki"/>`,
		"fallback": "dinkie-icons:wrapped-present",
	});
}

export default Component;
