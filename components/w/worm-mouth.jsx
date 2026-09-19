import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqqe73bkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqqe73bkv"/>`,
		"fallback": "game-icons:worm-mouth",
	});
}

export default Component;
