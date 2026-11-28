import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev7zx5mob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev7zx5mob primary"/>`,
		"fallback": "iconaut:wind-duotone",
	});
}

export default Component;
