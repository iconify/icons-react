import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmxh44brd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmxh44brd"/>`,
		"fallback": "game-icons:whistle",
	});
}

export default Component;
