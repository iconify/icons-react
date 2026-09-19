import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1_t2wbky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1_t2wbky"/>`,
		"fallback": "game-icons:whale-tail",
	});
}

export default Component;
