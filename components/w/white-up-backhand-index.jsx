import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdlzfwoqf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdlzfwoqf"/>`,
		"fallback": "dinkie-icons:white-up-backhand-index",
	});
}

export default Component;
