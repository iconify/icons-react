import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0c-0xbuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0c-0xbuf"/>`,
		"fallback": "game-icons:white-book",
	});
}

export default Component;
