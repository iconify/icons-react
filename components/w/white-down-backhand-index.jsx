import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzk9qz28b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzk9qz28b"/>`,
		"fallback": "dinkie-icons:white-down-backhand-index",
	});
}

export default Component;
