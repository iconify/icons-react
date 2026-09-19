import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz1pg6brd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz1pg6brd"/>`,
		"fallback": "game-icons:wooden-pegleg",
	});
}

export default Component;
