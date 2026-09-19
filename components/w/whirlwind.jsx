import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff0tn4i0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff0tn4i0s"/>`,
		"fallback": "game-icons:whirlwind",
	});
}

export default Component;
