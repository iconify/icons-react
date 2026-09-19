import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhe7dvyvu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhe7dvyvu"/>`,
		"fallback": "dinkie-icons:white-right-backhand-index",
	});
}

export default Component;
