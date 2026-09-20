import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f51ipzb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f51ipzb9y"/>`,
		"fallback": "thesvg-color:zod",
	});
}

export default Component;
