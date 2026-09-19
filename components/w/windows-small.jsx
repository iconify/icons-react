import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd1pqpwnr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd1pqpwnr"/>`,
		"fallback": "dinkie-icons:windows-small",
	});
}

export default Component;
