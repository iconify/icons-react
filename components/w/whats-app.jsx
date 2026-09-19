import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6ea1acit.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6ea1acit"/>`,
		"fallback": "dinkie-icons:whats-app",
	});
}

export default Component;
