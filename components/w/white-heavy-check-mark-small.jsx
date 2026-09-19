import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y108lacqb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y108lacqb"/>`,
		"fallback": "dinkie-icons:white-heavy-check-mark-small",
	});
}

export default Component;
