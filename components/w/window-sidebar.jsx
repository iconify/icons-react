import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr5l7qb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr5l7qb8b"/>`,
		"fallback": "ci:window-sidebar",
	});
}

export default Component;
