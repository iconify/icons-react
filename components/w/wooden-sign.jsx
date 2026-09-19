import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipir0_b_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipir0_b_o"/>`,
		"fallback": "game-icons:wooden-sign",
	});
}

export default Component;
